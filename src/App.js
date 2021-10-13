import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <PrivateRoute exact path="/">
              <Home></Home>
            </PrivateRoute>
            <PrivateRoute path="/home">
              <Home></Home>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/loading">
              <Loading></Loading>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
