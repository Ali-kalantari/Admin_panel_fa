import { useState } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Panel from "./components/Panel/Panel";
import Topbar from "./components/Topbar/Topbar";
import Course from "./pages/Course/Course";
import Profile from "./pages/Profile/Profile";
import UserDoc from "./pages/UserDoc/UserDoc";
import Onlineclass from "./pages/Onlineclass/Onlineclass";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Match from "./pages/Match/Match";
import Evalution from "./pages/Evalution/Evalution";
function App() {
  const [togglepanel, settogglepanel] = useState(true);

  const handletogglepanel = () => {
    settogglepanel(!togglepanel);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className={togglepanel ? "app-main hide" : "app-main show"}>
          <div className="topbar">
            <Topbar toggle={handletogglepanel} />
          </div>
          <div className="router">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/course">
                <Course />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path='/userdoc'>
                <UserDoc />
              </Route>
              <Route path='/onlineclass'>
                <Onlineclass />
              </Route>
              <Route path='/changepassword'>
                <ChangePassword />
              </Route>
              <Route path='/match'>
                <Match />
              </Route>
              <Route path='/evalution'>
                <Evalution />
              </Route>
            </Switch>
          </div>
        </div>
        <div className={togglepanel ? "app-sidebar show" : "app-sidebar hide"}>
          <Panel show={togglepanel} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
