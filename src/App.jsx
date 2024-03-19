import MainView from "./components/main-view/main-view";
import store from "./store/store";
import { addTodo, toggleTodo } from "./actions/actions";

console.log("Intial State: ", store.getState());

// Dispatch first addTodo action
store.dispatch(addTodo("Dispatch my first action"));
console.log("State after dispatch: ", store.getState());

// Dispatch second addTodo action
store.dispatch(addTodo("Dispatch my second action"));
console.log("State after dispatch: ", store.getState());

// Dispatch third addTodo action
store.dispatch(addTodo("Dispatch my third action"));
console.log("State after dispatch: ", store.getState());

// Dispatch toggleTodo action
store.dispatch(toggleTodo(0));
console.log("State after toggleTodo dispatch: ", store.getState());

function App() {
  return <MainView />;
}

export default App;
