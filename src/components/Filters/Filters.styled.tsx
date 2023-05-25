import styled from "styled-components";

interface Props {
  show: boolean;
}

export const StyledFiltersContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-height: 75.6px;
  padding: 25px;
  border-radius: 5px;
  position: relative;
  bottom: 40px;
  background-color: white;
  box-shadow: 3px 3px 10px hsl(180, 8%, 52%, 0.3);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  @media (min-width: 1440px) {
    width: 1000px;
  }
`;

export const StyledFiltersList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledOneFilter = styled.div`
  display: flex;
`;

export const StyledFilterName = styled.p`
  background-color: #fff;
  color: ${(props) => props.theme.colors.primary.desaturatedDarkCyan};
  background-color: ${(props) =>
    props.theme.colors.neutral.lightGrayishCyanFilter};
  padding: 6px;
  font-weight: 700;
  border-radius: 5px;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    right: -5px;
    height: 100%;
    width: 10px;
    background-color: ${(props) =>
      props.theme.colors.neutral.lightGrayishCyanFilter};
  }
`;

export const StyledCloseBtn = styled.button`
  margin: none;
  border: none;
  color: white;
  background-color: ${(props) =>
    props.theme.colors.primary.desaturatedDarkCyan};
  box-sizing: content-box;
  padding-left: 5px;
  height: 25.6px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.neutral.veryDarkGrayishCyan};
  }
`;

export const StyledClear = styled.button`
  background-color: white;
  border: none;
  color: ${(props) => props.theme.colors.primary.desaturatedDarkCyan};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
