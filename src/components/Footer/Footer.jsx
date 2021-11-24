import React from "react";
import { Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <div className="redes-sociais">
        <ul className="redes-rodape">
          <li>
            <a href="https://www.instagram.com/luanmelo20/">
              <img src="../icone-instagram.svg" alt="instagram" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/luan-melo-260b18110/">
              <img src="../icone-linkedin.svg" alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
