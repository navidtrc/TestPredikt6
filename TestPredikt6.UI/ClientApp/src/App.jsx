import MainRouter from "./Router/MainRouter";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <MainRouter props={props}/>
    </div>
  );
}

export default App;
