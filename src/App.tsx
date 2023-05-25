import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "./redux";

import List from "./components/List";
import Filters from "./components/Filters";

import data from "../public/data.json";

import { StyledApp, StyledEmptyHead } from "./App.styled";

function App() {
  const filters = useSelector((state: RootState) => state);
  const [renderData, setRenderData] = useState(data);

  useEffect(() => {
    if (filters.length === 0) {
      setRenderData(data);
    } else {
      const filteredData = data.filter((job) => {
        const categories = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        return filters.every((filter) => categories.includes(filter));
      });
      setRenderData(filteredData);
    }
  }, [filters]);

  return (
    <StyledApp>
      <StyledEmptyHead />
      <Filters />
      <List renderData={renderData} />
    </StyledApp>
  );
}

export default App;
