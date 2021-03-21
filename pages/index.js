import Head from "next/head";
import ReviewBox from "../src/components/ReviewBox";
import Card from "../src/components/Card";
import ContainerStyled from "../src/components/ContainerStyled";
import HeadlineStyled from "../src/components/HeadlineStyled";
import TopContainerStyled from "../src/components/TopContainerStyled";
import CardContainerStyled from "../src/components/CardContainerStyled";
import { REVIEWS, VERIFIED_REVIEWS } from "../src/constants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Proof Section</title>
      </Head>

      <main>
        <ContainerStyled>
          <TopContainerStyled>
            <HeadlineStyled>
              <h1>10,000+ of our users love our products.</h1>
              <p>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </HeadlineStyled>
            <div className="reviews-container">
              {REVIEWS.map(({ content, key }, i, arr) => (
                <ReviewBox key={key} multiplier={(arr.length - 1) - i} content={content} />
              ))}
            </div>
          </TopContainerStyled>
          <CardContainerStyled>
            {VERIFIED_REVIEWS.map(({ img, buyerName, content }, i) => (
              <Card
                key={i}
                img={img}
                buyerName={buyerName}
                content={content}
                multiplier={i}
              />
            ))}
          </CardContainerStyled>
        </ContainerStyled>
      </main>
    </div>
  );
}
