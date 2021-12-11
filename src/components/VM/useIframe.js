// https://base64.guru/converter/encode/html
export const useNoOriginIframe = () => {
  const global = document.createElement('iframe');
  global.style.display = none;
  global.src = 'data:text/html;base64,PGh0bWw+PGJvZHk+PC9ib2R5PjwvaHRtbD4='
  return {
    global,
  };  
}