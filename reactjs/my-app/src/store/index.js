import createStore from "./createStore";
const store = createStore(countReducer);
function countReducer(action, state = 0) {
  switch (action.type) {
    case "ADD":
      return state++;
    case "MINUS":
      return state--;
    default:
      return state;
  }
}
export default store;
