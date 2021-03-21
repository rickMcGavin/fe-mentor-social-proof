import Star from "../icons/Star";
import ReviewBoxStyled from './ReviewBoxStyled';

const ReviewBox = ({ content, multiplier }) => {
  const starArr = new Array(5).fill({ renderStar: () => <Star /> });

  return (
    <ReviewBoxStyled multiplier={multiplier}>
      {/* stars */}
      {starArr.map(({ renderStar }) => renderStar())}
      <p>{content}</p>
    </ReviewBoxStyled>
  );
};

export default ReviewBox;
