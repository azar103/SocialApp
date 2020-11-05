import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { getAuthUser } from "./redux/actions/authActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
