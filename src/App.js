import React from "react";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Form from "./components/Form";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  return (
    <div>
      <Header />
      <Form />
    </div>
  );
}

export default App;
