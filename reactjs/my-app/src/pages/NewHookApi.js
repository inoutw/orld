import store from "../store";
import { useId, useReducer, useEffect } from "react";

export default function NewHookApi() {
  const id = useId();
  const state = store.getState();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    store.subscribe(() => {
      forceUpdate();
    });
  }, []);

  // const state = useSyncExternalStore()
  return (
    <div>
      <h3 id={id}>NewHookApi</h3>
      <button
        onClick={() => {
          store.dispatch({ type: "ADD" });
        }}
      >
        state: {state}
      </button>
    </div>
  );
  // const state = useSyncExternal(subscribe, getSnapshot);
}
