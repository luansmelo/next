import React from "react";
import { useHistory } from "react-router";
import { Container, Button } from "./style";

const Header = () => {
  const IsPageUsers = window.location.pathname.includes("/users");
  const IsDetailsPage = window.location.pathname.includes("/details");

  const history = useHistory();

  const handleButtonClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <img src="../logo.svg" alt="logo" className="img-logo" />

      {(IsDetailsPage || IsPageUsers) && (
        <Button onClick={handleButtonClick}>Voltar</Button>
      )}
    </Container>
  );
};

export default Header;
