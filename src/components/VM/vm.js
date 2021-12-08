class VM {
  constructor(realm) {
    this._realm = realm;
    const safeLogWrapper = realm.evaluate(`(log) => {
      return (msg) => {
        log(msg)
      }
    }`)
    const safeLog = safeLogWrapper(console.log);
    realm.global.log = safeLog
    const wrapper = `(() => ({
      safeFunctionWrapper: (outerRealmUnsafeFunction, functionName) => {
        // This function is safe because it is created here inside the realm.        
        const innerRealmSafeFunction = function innerRealmSafeFunction(...innerRealmArgs) {
          try { return outerRealmUnsafeFunction(this, ...innerRealmArgs) }
          catch (outerRealmException) {}
        }
        return innerRealmSafeFunction;
      },
      objectCreate: (() => {
        // Wrap Object.create so it can't be modified and can't be accessed by the plugin     
        let objCreate = Object.create
        return (prototype) => {
          return objCreate(prototype)
        }
      })(),
      emptyObject: () => { return {} },
      emptyArray: () => { return [] }
}))()`;
    const safeCreator = this._realm.evaluate(wrapper);
    this.functionCreator = safeCreator.safeFunctionWrapper;
    this.objectCreate = safeCreator.objectCreate;
    this.emptyObject = safeCreator.emptyObject;
    this.promiseCreate = safeCreator.promiseCreate;
    this.emptyArray = safeCreator.emptyArray;
  }
  getNumber(n) {
    const createNumber = this._realm.evaluate('n => n');
    return createNumber(n);
  }
  getString(s) {
    const createString = this._realm.evaluate('s => s');
    return createString(s)
  }
  getArray() {
    return this.emptyArray();
  }
  createFunction(fn, fnName) {
    this.functionCreator(fn, fnName);
  }
  createArray(arr) {
    return arr.reduce((res, element) => {
      res.push(this.createObject(element))
      return res;
    }, this.getArray());
  }
  createObject(obj) {
    return Object.keys(obj).reduce((res, prop) => {
      const value = obj[prop];
      if (typeof value === 'number') {
        res[prop] = this.getNumber(value);
      }
      if (typeof value === 'string') {
        res[prop] = this.getString(value);
      }
      if (Array.isArray(value)) {
        res[prop] = this.createArray(value);
      }
      if (typeof value === 'object' && !Array.isArray(value)) {
        res[prop] = this.createObject(value);
      }
      if (typeof value === 'function') {
        res[prop] = this.createFunction(value.name);
      }
      return res;
    }, this.emptyObject());
  }
  evaluate(code, args) {
    return this._realm.evaluate(code, args);
  }
}

export const createVM = () => {
  if (!window.Realm) {
    throw Error('Realms is not loaded');
  }
  return new VM(Realm.makeRootRealm());
}