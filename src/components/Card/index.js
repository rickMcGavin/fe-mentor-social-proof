import Image from "next/image";
import CardStyled from './CardStyled';

const Card = ({ img, buyerName, content, multiplier }) => {
  return (
    <CardStyled multiplier={multiplier}>
      <div className="buyer-info">
        <Image src={img} width={40} height={40} />
        <div>
          <h2>{buyerName}</h2>
          <div className="verified-buyer">Verified Buyer</div>
        </div>
      </div>
      <p>
        {content}
      </p>
    </CardStyled>
  );
};

export default Card;
