import {
  useReducer,
  useState,
} from 'react';

const initState = {
  page: {
    tile: 'demo',
    documents: [
      {
        id: "block-1",
        type: "block",
        style: {
          bgColor: "red",
          color: "yellow",
          opacity: "0.5",
          width: "200px",
          height: "100px"
        },
        children: [
          {
            id: "text-1",
            type: "text",
            style: {
              bgColor: "red",
              color: "yellow",
              opacity: "0.5",
              width: "200px",
              height: "100px"
            },
            text: "Text",
            children: [],
          }
        ]
      }
    ]
  },
};

const styleReducer = (style, action) => {
  switch (action.type) {
    case 'bgColor': {
      return {
        ...style,
        bgColor: payload,
      }
    }
    case 'color': {
      return {
        ...style,
        color: payload,
      }
    }
    case 'width': {
      return {
        ...style,
        width: payload,
      }
    }
    case 'height': {
      return {
        ...style,
        height: payload,
      }
    }
    case 'opacity': {
      return {
        ...style,
        opacity: payload,
      }
    }
    default:
      return doc;
  }
}

const pageReducer = (page, action) => {
  const { type, id, payload } = action;
  switch (type) {
    case 'title': {
      return {
        ...page,
        title: payload,
      }
    }
    case 'add': {
      return {
        ...page,
        documents: page.documents.slice().push(payload)
      }
    }
    case 'remove': {
      const idx = page.documents.findIndex(d => d.id === id);
      if (idx > -1) {
        return {
          ...page,
          documents: page.documents.splice(idx, 1),
        }
      }
      return page;
    }
    case 'setPage': {
      return {
        ...payload,
      }
    }
    default:
      return {
        ...page,
        documents: documents.map(d => docReducer(d, action)),
      };
  }
}
const docReducer = (d, action) => {
  const [id] = action;
  if (id === d.id) {
    return {
      ...d,
      style: styleReducer(d.style, action),
    }
  }
  return d;
}
export const useApp = () => {
  const [app, dispatch] = useReducer((state, action) => {
    return {
      page: pageReducer(state.page, action),
    }
  }, initState);
  return [
    app,
    dispatch,
  ]
}