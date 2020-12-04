import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import 'bulma/css/bulma.css';
import PrivateRoute from "./components/PrivateRoute";
import CrudPage from "./components/CrudPage";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route path="/test" component={CrudPage} />
          <PrivateRoute path="/crud" component={CrudPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
