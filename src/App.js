import "./App.css";
import Header from "./components/Header/Header";
import Employees from "./components/Employees/Employees";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/gh-pages-url" render={() => <Redirect to="/home" />} />
      <Route path="/gh-pages-url/employees" render={() => <Employees />} />
    </div>
  );
}

export default App;
