import { useState, useEffect } from "react";
import axios from "axios";
import TestComponent from "./components/test";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>API Response</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <TestComponent />
    </div>
  );
}

export default App;
