import MainView from "./components/main-view/main-view";
import store from "./store/store";
import { addTodo, toggleTodo, deleteTodo } from "./actions/actions";

console.log("Intial State: ", store.getState());

// Dispatch first addTodo action
store.dispatch(addTodo("Dispatch the first action"));
console.log("State  after first addTodo dispatch: ", store.getState());

// Dispatch second addTodo action
store.dispatch(addTodo("Dispatch the second action"));
console.log("State  after second addTodo dispatch: ", store.getState());

// Dispatch third addTodo action
store.dispatch(addTodo("Dispatch the third action"));
console.log("State  after third addTodo dispatch: ", store.getState());

// Dispatch toggleTodo action
store.dispatch(toggleTodo(0));
console.log("State after first toggleTodo dispatch: ", store.getState());

// Dispatch deleteTodo action
store.dispatch(deleteTodo(1));
console.log("State after first deleteTodo dispatch: ", store.getState());

function App() {
  return <MainView />;
}

export default App;
