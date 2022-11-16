import { useState } from "react";
import styled from "styled-components";

const Card = ({
  clickedBoolAnswer,
  cardQuestion,
  cardAnswer,
  isBookmarked,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function buttonToggle() {
    if (showAnswer === false) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }

  return (
    <article className="card">
      <SectionContainer>
        {isBookmarked ? (
          <ImgContainer
            src="/bookmark-solid.svg"
            alt="test"
            height="100px"
            width="100px"
          />
        ) : (
          <ImgContainer
            src="/bookmark-regular.svg"
            alt="test"
            height="100px"
            width="100px"
          />
        )}
        <h2 className="card__item">{cardQuestion}</h2>
        <button className="card__button" onClick={buttonToggle}>
          {showAnswer ? "Hide answer" : "Show answer"}
        </button>
        <h3 className={showAnswer ? "card__item" : "card__item hide"}>
          {cardAnswer}
        </h3>
      </SectionContainer>
    </article>
  );
};

export default Card;

const SectionContainer = styled.section`
  border: 1px outset grey;
`;

const ImgContainer = styled.img`
  position: relative;
  top: 0%;
  right: -46%;
  height: 55px;
  width: 55px;
`;
