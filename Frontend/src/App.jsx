import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return data.test.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title} : {author}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  );
}

export default App;
