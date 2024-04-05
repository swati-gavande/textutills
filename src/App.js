import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#212529"
      showAlert("Dark mode has been enabled", "danger");
      // document.title="TextUtils Darkmode";

    } else {
      setMode("light");
      document.body.style.background = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title="TextUtils Lightmode";
    }
  };

  return (
    <>
      <Router>
        <NavBar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
        {/* <NavBar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About  mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Try TextUtils - convert to uppercase, convert to lowercase, count words, count chanracters, Remove extra spaces" showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
