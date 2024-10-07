import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <h1>Welcome!!</h1>
      <p>Please enter your query in the box below:</p>
      <p>Example queries: "What is the capital of France?"</p>
      <p>Example queries: "Who is Shakespeare?"</p>
      <p>Example queries: "What is your Andrew ID?"</p>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div>
        {QueryProcessor(query) == "" ? "No Match" : QueryProcessor(query)}
      </div>
    </div>
  );
}
