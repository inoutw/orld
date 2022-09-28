function deepCopy(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepCopy(obj[key]);
    }
  }
  return cloneObj;
}
let a1 = { a: { a: 1 } };
let a2 = deepCopy(a1);
a2;
a2.a.a = 2;
a1;
