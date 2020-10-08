import React, { useState } from "react";
import Header from "./components/Header";
import { Route, useHistory } from "react-router-dom";
import FormUser from "./components/FormUser";
import FormDetails from "./components/FormDetails";
import Confirm from "./components/Confirm";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    workStatus: "",
    phone: "",
  });

  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  const inputChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  return (
    <div>
      <Header />
      <Route path="/" exact>
        <FormUser inputChange={inputChange} state={state} />
      </Route>
      <Route path="/details">
        <FormDetails inputChange={inputChange} state={state} />
      </Route>
      <Route path="/confirm">
        <Confirm state={state} />
      </Route>
      <Route path="/home">
        <Home state={state} />
      </Route>
    </div>
  );
}

export default App;
