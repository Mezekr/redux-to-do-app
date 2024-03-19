import MainView from "./components/main-view/main-view";
import store from "./store/store";

function App() {
  console.log(store);
  return <MainView />;
}

export default App;
