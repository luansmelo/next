import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background: black;
  justify-content: center;
  .redes-sociais {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .redes-sociais ul {
    display: flex;
    list-style: none;
  }

  .redes-rodape li {
    margin: 0 10px;
  }

  img {
    width: 25px;
    vertical-align: middle;
    transition: all 0.2s ease-in;

    &:hover {
      transform: scale(1.5);
    }
  }
`;

export { Container };
