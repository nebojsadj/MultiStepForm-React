import React from "react";

function Home({ state }) {
  const { firstName, lastName } = state;
  return (
    <div>
      <h1 className="text-center display-4">{`Welcome ${firstName} ${lastName} !`}</h1>
    </div>
  );
}

export default Home;
