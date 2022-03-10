import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Switch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/authRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/createPost";
import SinglePost from "./pages/SinglePost";
import NotFound from "./components/error404";

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <NavBar />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={100}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <AuthRoute exact path="/register" component={Register} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
