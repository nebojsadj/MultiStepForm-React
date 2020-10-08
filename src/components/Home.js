import React from "react";

function Home({ state }) {
  return (
    <div>
      <h1 className="text-center display-4">{`Welcome ${state.firstName} ${state.lastName} !`}</h1>
    </div>
  );
}

export default Home;
