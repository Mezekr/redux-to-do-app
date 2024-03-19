import MainView from "./components/main-view/main-view";
import store from "./store/store";
import { addTodo } from "./actions/actions";

console.log("Intial State: ", store.getState());
store.dispatch(addTodo("Dispatch my first action"));
console.log("State after dispatch: ", store.getState());

function App() {
  return <MainView />;
}

export default App;
