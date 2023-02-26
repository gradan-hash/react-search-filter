import "./App.css";
import { Users } from "./users";
import { useState, useEffect } from "react";
import axios from "axios";
import { host } from "./api";
import Table from "./table";
const App = () => {
  const [query, Setquery] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8700?q=${query}`);
      setData(res.data);
    };

    if (query.length == 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <div className="app">
      <input
        className="search"
        placeholder="search"
        onChange={(e) => Setquery(e.target.value)}
      />

      <Table data={data} />
    </div>
  );
};

export default App;
