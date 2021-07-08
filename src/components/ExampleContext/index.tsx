import { Context } from "context";
import { useContext } from "react";

export default function ExampleContext(): JSX.Element {
  const { state } = useContext(Context);

  return (
    <div>
      <div>ExampleContext</div>
      <p>State: {state}</p>
    </div>
  );
}
