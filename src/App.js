import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet name = "Alen Chacko" place = "Kannur"  /> */}
      {/* <FunctionClick/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
