import { Context } from "context";
import { useContext } from "react";

export default function ExampleContext2(): JSX.Element {
  const { setState } = useContext(Context);

  return (
    <div>
      <div>ExampleContext2</div>
      <button onClick={() => setState((state) => state + 1)}>
        Change State
      </button>
    </div>
  );
}
