export const delay = (interval, obj, func, params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof obj[func] === "function") {
        resolve(obj[func](params[0], params[1]));
      } else {
        reject(new Error());
      }
    }, interval);
  });
}
