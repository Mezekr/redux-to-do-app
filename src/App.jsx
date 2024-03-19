import MainView from "./components/main-view/main-view";
import store from "./store/store";
import { addTodo } from "./actions/actions";

console.log("Intial State: ", store.getState());

function App() {
  return <MainView />;
}

export default App;
