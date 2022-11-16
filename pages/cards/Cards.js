import Card from "../../components/card/Card";

const Cards = ({
  currentPage,
  setCurrentPage,
  cardsArray,
  setCardsArray,
  key,
  returnCard,
}) => {
  return (
    <>
      {console.log(cardsArray)}
      {cardsArray.map((card) => (
        <Card
          cardQuestion={card.question}
          cardAnswer={card.answer}
          isBookmarked={card.isBookmarked}
        />
      ))}
    </>
  );
};

export default Cards;
