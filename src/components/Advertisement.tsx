import { styled } from "styled-components";

function Advertisement() {
  const navigate = () => {
    window.location.href = "https://www.wanted.co.kr/";
  };

  return (
    <Container>
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="ADImage"
      />
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  border-bottom: 0.5px solid grey;
  padding: 10px 0;
  justify-content: center;
`;

export default Advertisement;
