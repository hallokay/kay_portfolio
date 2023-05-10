import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <TimelineItem>
      <i className={data.icon} />
      <span>{data.year}</span>
      <h3 className="title">
        {data.title}
        <span>{data?.company}</span>
      </h3>

      <p>{data.desc}</p>
    </TimelineItem>
  );
};
const TimelineItem = styled.div`
  position: relative;
  padding-left: 3.125rem;
  padding-bottom: 3.125rem;
  i {
    position: absolute;
    left: -0.4375rem;
    margin-right: 5px;
    font-size: var(--h2-size);
    color: var(--first-color);
    background: var(--container-color);
    padding: 0.4375rem 0;
  }
  &::before {
    position: absolute;
    left: 0.25rem;
    content: "";
    width: 1px;
    height: 100%;
    background: var(--first-color);
  }

  span {
    color: #8b88b1;
    font-size: var(--small-size);
  }

  p{ 
    margin: .5rem 0;
  }
  .title {
    font-size: var(--h3-size);
    margin: .5rem 0 2rem;

    span {
      margin-left: 5px;
    }
  }
`;
export default Card;
