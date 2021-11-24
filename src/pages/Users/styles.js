import styled from "styled-components";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
`;
const UsersCreateContainer = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .img-logo {
    position: relative;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 42px;
    font-weight: 600;
  }
  .create-avatar {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
  }

  @media screen and (max-width: 576px) {
    font-size: 10px;

    .img-logo {
      width: 150px;
    }

    h1 {
      font-size: 15px;
      font-weight: 220;
    }
  }
`;

const UsersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserCardContainer = styled.div`
  min-height: 270px;
  padding: 12px 0 12px 0;
  margin: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-profile-avatar {
    width: 220px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  border: 1px solid black;
  border-radius: 8px;
  background-color: black;
  color: yellow;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.34);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.34);
  cursor: pointer;
  text-align: center;

  @media screen and (max-width: 576px) {
    width: 200px;
    .img-profile-avatar {
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
`;

const UsersCreateDialogWrapper = styled.div`
  width: 300px;
  height: 225px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export {
  UsersContainer,
  UsersCreateContainer,
  UsersCreateDialogWrapper,
  UsersListContainer,
  UserCardContainer,
  LoaderContainer,
};
