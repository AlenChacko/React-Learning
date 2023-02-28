import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet name = "Alen Chacko" place = "Kannur"  /> */}
      {/* <FunctionClick/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting /> */}
      <NameList/>
    </div>
  );
}

export default App;
