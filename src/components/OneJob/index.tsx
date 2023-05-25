import { addFilter } from "../../redux";
import { useDispatch } from "react-redux";

import {
  StyledOneJob,
  StyledImg,
  StyledJobInfo,
  StyledJobInfoTop,
  StyledJobInfoMid,
  StyledJobInfoBottom,
  StyledJobCategories,
  StyledOneJobLeft,
  StyledNewBadge,
  StyledFeaturedBadge,
  StyledOneCategory,
  StyledFeaturedSpan,
} from "./OneJob.styled";

interface Props {
  job: {
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
  };
}

const OneJob = ({ job }: Props) => {
  const dispatch = useDispatch();
  const categories = [job.role, job.level]
    .concat(job.languages)
    .concat(job.tools);

  return (
    <StyledOneJob>
      {job.featured && <StyledFeaturedSpan />}
      <StyledOneJobLeft>
        <StyledImg src={job.logo} />
        <StyledJobInfo>
          <StyledJobInfoTop>
            <p> {job.company}</p>
            {job.new && <StyledNewBadge>NEW!</StyledNewBadge>}
            {job.featured && (
              <StyledFeaturedBadge>FEATURED</StyledFeaturedBadge>
            )}
          </StyledJobInfoTop>
          <StyledJobInfoMid>{job.position}</StyledJobInfoMid>
          <StyledJobInfoBottom>
            <p> {job.postedAt}</p>
            &bull;
            <p> {job.contract}</p>
            &bull;
            <p> {job.location}</p>
          </StyledJobInfoBottom>
        </StyledJobInfo>
      </StyledOneJobLeft>
      <StyledJobCategories>
        {categories &&
          categories.map((category) => {
            return (
              <StyledOneCategory
                key={category}
                onClick={() => {
                  dispatch(addFilter(category));
                }}
              >
                {category}
              </StyledOneCategory>
            );
          })}
      </StyledJobCategories>
    </StyledOneJob>
  );
};

export default OneJob;
