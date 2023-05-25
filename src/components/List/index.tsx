import OneJob from "../OneJob";

import { StyledListContainer } from "./List.styled";

interface Props {
  renderData: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }[];
}

const List = ({ renderData }: Props) => {
  return (
    <StyledListContainer>
      {renderData &&
        renderData.map((job) => {
          return <OneJob key={job.id} job={job} />;
        })}
    </StyledListContainer>
  );
};

export default List;
