import { useEffect, useState } from "react";
import axios from "axios";

import { ExampleContext, ExampleContext2 } from "components";

import { Context } from "context";

export default function Home(): JSX.Element {
  const [state, setState] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    async function fetchRepos() {
      const response = await axios.get(
        "https://api.github.com/users/johnanon9771/repos",
        {
          cancelToken: cancelToken.token,
        }
      );
      console.log(response.data);
      setRepos(response.data);
    }
    fetchRepos();
    return () => cancelToken.cancel("Cancelled");
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <Context.Provider value={{ state, setState }}>
        <ExampleContext />
        <ExampleContext2 />
      </Context.Provider>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}
