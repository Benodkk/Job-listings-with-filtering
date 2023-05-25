import styled from "styled-components";

export const StyledOneJob = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  position: relative;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px hsl(180, 8%, 52%, 0.3);
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    width: 1000px;
    height: 120px;
    gap: 0px;
  }
`;

export const StyledFeaturedSpan = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.primary.desaturatedDarkCyan};
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 5px;
    height: 100%;
    width: 6px;
    background-color: white;
  }
`;

export const StyledOneJobLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  padding-top: 10px;
  @media (min-width: 1440px) {
    padding-top: 0px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledImg = styled.img`
  height: 50px;
  position: absolute;
  top: -25px;
  @media (min-width: 1440px) {
    height: 70px;
    position: static;
  }
`;

export const StyledJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5px 0;
  gap: 10px;
  @media (min-width: 1440px) {
    gap: 0px;
  }
`;

export const StyledJobInfoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.primary.desaturatedDarkCyan};
`;

export const StyledNewBadge = styled.p`
  background-color: ${(props) =>
    props.theme.colors.primary.desaturatedDarkCyan};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
`;
export const StyledFeaturedBadge = styled.p`
  background-color: ${(props) =>
    props.theme.colors.neutral.veryDarkGrayishCyan};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
`;

export const StyledJobInfoMid = styled.div`
  font-weight: 700;
  color: hsl(180, 14%, 20%);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.primary.desaturatedDarkCyan};
  }
`;

export const StyledJobInfoBottom = styled.div`
  display: flex;
  gap: 5px;
  color: hsl(180, 8%, 52%);
`;

export const StyledJobCategories = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledOneCategory = styled.p`
  background-color: #fff;
  color: ${(props) => props.theme.colors.primary.desaturatedDarkCyan};
  background-color: ${(props) =>
    props.theme.colors.neutral.lightGrayishCyanFilter};
  padding: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.primary.desaturatedDarkCyan};
    color: ${(props) => props.theme.colors.neutral.lightGrayishCyanFilter};
  }
`;
