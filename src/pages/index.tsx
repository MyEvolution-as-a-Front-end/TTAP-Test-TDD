import { useState } from "react";

import { ExampleContext, ExampleContext2 } from "components";

import { Context } from "context";

export default function Home(): JSX.Element {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>Hello world</h1>
      <Context.Provider value={{ state, setState }}>
        <ExampleContext />
        <ExampleContext2 />
      </Context.Provider>
    </>
  );
}
