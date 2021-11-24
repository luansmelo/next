import React from "react";
import { UserCardContainer } from "./styles";

function UsersCards(props) {
  return (
    <UserCardContainer onClick={props.onClick}>
      <h4>{props.name}</h4>
      <img className="img-profile-avatar" src={props.avatar} alt={props.name} />
      <p>
        <strong>Criado em:</strong> {props.createdAt}
      </p>
    </UserCardContainer>
  );
}

export default UsersCards;
