import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
`;

const UserEditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .img-logo {
    width: 200px;
    margin: 12px 0;
    margin-right: 20px;
  }

  .edit-avatar {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
  }

  @media screen and (max-width: 576px) {
    .img-logo {
      width: 200px;
    }

    h1 {
      font-size: 20px;
      font-weight: 220;
    }
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 60px;
  .img-edit-avatar {
    border-radius: 8px;
    width: 200px;
    margin: 12px 0;
    margin-right: 20px;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 7px;
    .img-edit-avatar {
      width: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 14px;

    .img-edit-avatar {
      width: 190px;
    }
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 10px;
  }
`;

const UsersDetailsDialogWrapper = styled.div`
  width: 300px;
  height: 225px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
`;

export {
  UserEditContainer,
  UserInfoContainer,
  Container,
  UserInfoWrapper,
  UsersDetailsDialogWrapper,
  Content,
};
