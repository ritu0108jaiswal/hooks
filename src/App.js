import "./styles.css";
import TodoApp from "./components/TodoApp";
import FetchProducts from "./components/FetchProducts/FetchProducts";
import SetProgress from "./components/SetProgress";
import UserData from "./components/UserData";

export default function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <SetProgress />
      <h2>Start editing to see some magic happen!</h2>
      <TodoApp />
      <FetchProducts />
      <UserData />
    </div>
  );
}
