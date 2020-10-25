import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const API_URL= process.env.LOCAL_API_URL
// const API_URL= process.env.API_URL //for production

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 10px 0 10px 0;
  }
`;

const Home = ({ products }) => (
  <StyledContainer>
    <div>
      <h1>Next.js + Fomantic-UI!</h1>
    </div>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
    <div>
      {JSON.stringify(products)}
      <Icon name="home" size="big" />
      <Icon name="star" size="big" />
      <Icon name="heart" size="big" />
      <Icon name="ambulance" size="big" />
      <Icon name="lightbulb" size="big" />
    </div>
  </StyledContainer>
);

export async function getServerSideProps() {

  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

export default Home;
