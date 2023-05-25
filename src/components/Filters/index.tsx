import { useSelector, useDispatch } from "react-redux";
import { RootState, addFilter, removeFilters } from "../../redux";

import {
  StyledClear,
  StyledCloseBtn,
  StyledFilterName,
  StyledFiltersContainer,
  StyledFiltersList,
  StyledOneFilter,
} from "./Filters.styled";

const Filters = () => {
  const filters = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <StyledFiltersContainer show={filters.length != 0}>
      <StyledFiltersList>
        {filters.map((filter) => {
          return (
            <StyledOneFilter key={filter}>
              <StyledFilterName> {filter}</StyledFilterName>
              <StyledCloseBtn onClick={() => dispatch(addFilter(filter))}>
                x
              </StyledCloseBtn>
            </StyledOneFilter>
          );
        })}
      </StyledFiltersList>
      <StyledClear onClick={() => dispatch(removeFilters())}>Clear</StyledClear>
    </StyledFiltersContainer>
  );
};

export default Filters;
