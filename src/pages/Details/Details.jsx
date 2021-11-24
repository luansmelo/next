import { useCallback, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import ModalDetailsEdit from "./ModalDetailsEdit";
import { deleteUser, getUserById } from "../../services/RequestApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Dialog } from "@mui/material";
import {
  Container,
  UserEditContainer,
  UserInfoContainer,
  UserInfoWrapper,
  Content,
} from "./styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Details = () => {
  const [userDetail, setUserDetails] = useState({
    name: "",
    avatar: "",
    createdAt: "",
  });

  const { id } = useParams();
  const { push } = useHistory();
  const [openDialog, setOpenDialog] = useState(false);

  const handleUserById = useCallback(
    async (showEditedToast = false) => {
      try {
        await getUserById(id).then((res) => setUserDetails(res));
        showEditedToast && toast.success("Usuário editado com sucesso.");
        setOpenDialog(false);
      } catch (error) {
        showEditedToast && toast.error("Erro, tente novamente.");
        setOpenDialog(false);
      }
    },
    [id]
  );

  const handleDeleteUser = async (id) => {
    if (window.confirm("Você deseja apagar este usuário? ")) {
      await deleteUser(id).then(() => {
        toast.success("Usuário deletado com sucesso.");
        setTimeout(function () {
          push("/users");
        }, 2000);
      });
    }
  };

  useEffect(() => {
    handleUserById();
  }, [handleUserById]);

  const data = new Date(userDetail.createdAt);
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  return (
    <Container>
      <Header />
      <Content>
        <UserEditContainer>
          <img src="../next-logo.png" alt="logo" className="img-logo" />
          <div>
            <h1>Edite seu avatar!</h1>
            <Button
              variant="outlined"
              className="edit-avatar"
              onClick={() => setOpenDialog(true)}
            >
              Editar avatar
            </Button>
          </div>
        </UserEditContainer>
        <UserInfoContainer>
          <div>
            <img
              src={userDetail.avatar}
              alt={userDetail.name}
              className="img-edit-avatar"
            />
          </div>
          <UserInfoWrapper>
            <h1>{userDetail.name}</h1>
            <p>
              <strong>Criado em:</strong> {dataFormatada}
            </p>

            <Button
              variant="outlined"
              className="edit-avatar"
              onClick={() => handleDeleteUser(id)}
            >
              Excluir avatar
            </Button>
          </UserInfoWrapper>
        </UserInfoContainer>
        {openDialog && (
          <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
            <ModalDetailsEdit
              onEdit={(showEditedToast) => handleUserById(showEditedToast)}
            />
          </Dialog>
        )}
        <ToastContainer autoClose={2000} position="bottom-center" />
      </Content>
      <Footer />
    </Container>
  );
};

export default Details;