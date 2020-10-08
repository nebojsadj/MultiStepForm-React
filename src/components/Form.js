import React, { useState } from "react";
import { Route } from "react-router-dom";
import FormUser from "./FormUser";
import FormDetails from "./FormDetails";
import Confirm from "./Confirm";
import Home from "./Home";

function Form() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    workStatus: "",
    phone: "",
  });

  const inputChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  return (
    <div>
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

export default Form;
