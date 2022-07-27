const getQueryByName = (name) => {
  const query = new URLSearchParams(location.search);
  return decodeURIComponent(query.get(name));
};
// url: https://baidu.com/#/?name=hello&age=100
const name = getQueryByName("name"); // hello
const age = getQueryByName("age"); // 100
const gender = getQueryByName("gender"); // null
