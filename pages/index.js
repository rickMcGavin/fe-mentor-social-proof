import Head from "next/head";
import ContainerStyled from "../src/components/ContainerStyled";
import HeadlineStyled from "../src/components/HeadlineStyled";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Proof Section</title>
      </Head>

      <main>
        <ContainerStyled>
          <HeadlineStyled>
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </HeadlineStyled>
        </ContainerStyled>
      </main>
    </div>
  );
}
