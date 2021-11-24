import { useEffect, useState } from "react";
import UsersCards from "./UsersCard";
import { useHistory } from "react-router-dom";
import { createUser, getUsers } from "../../services/RequestApi";
import { Button, Dialog, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoaderContainer,
  UsersContainer,
  UsersCreateContainer,
  UsersCreateDialogWrapper,
  UsersListContainer,
} from "./styles";
import Loader from "react-loader-spinner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUsers] = useState({
    name: "",
    avatar: "",
  });

  const { name, avatar } = newUser;
  const { push } = useHistory();
  const successToast = (message) => toast.success(message);
  const failtToast = (message) => toast.error(message);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    handleGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputNewUser = (e) => {
    const { name, value } = e.target;
    setNewUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGetUsers = async () => {
    setLoading(true);
    await getUsers().then((res) => {
      setUsers(res);
    });
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  const handleCreateUser = async () => {
    if (!newUser.name) return failtToast("Nome inválido.");
    if (!newUser.avatar) return failtToast("Imagem url inválida.");
    await createUser({ name, avatar, createdAt: new Date() })
      .then(() => {
        successToast("Usuário criado com sucesso.");
        setTimeout(function () {
          handleGetUsers();
        }, 2000);
      })
      .catch(() => failtToast("Erro, tente novamente."));
    setOpenDialog(false);
    setNewUsers({
      name: "",
      avatar: "",
    });
  };

  const redirectToDetails = (id) => {
    push(`details/${id}`);
  };

  const avatarList = users?.map(({ id, name, avatar, createdAt }) => {
    const data = new Date(createdAt);
    const dataFormatada = data.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });

    return (
      <UsersCards
        onClick={() => redirectToDetails(id)}
        key={id}
        name={name}
        avatar={avatar}
        createdAt={dataFormatada}
      />
    );
  });

  return (
    <>
      <Header />
      {loading ? (
        <LoaderContainer>
          <Loader type="ThreeDots" color="#ffc400" width={300} />
        </LoaderContainer>
      ) : (
        <UsersContainer>
          <UsersCreateContainer>
            <div>
              <img src="./next-logo.png" alt="logo" className="img-logo" />
            </div>
            <div>
              <h1>Crie seu avatar!</h1>
              <Button
                variant="outlined"
                className="create-avatar"
                onClick={() => setOpenDialog(true)}
              >
                Criar avatar
              </Button>
            </div>
          </UsersCreateContainer>

          <UsersListContainer>{avatarList}</UsersListContainer>

          {openDialog && (
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
              <UsersCreateDialogWrapper>
                <TextField
                  label="Insira o nome do Avatar"
                  name="name"
                  variant="outlined"
                  onChange={(e) => handleInputNewUser(e)}
                />
                <TextField
                  label="https://url-da-imagem-avatar.com/r"
                  name="avatar"
                  variant="outlined"
                  onChange={(e) => handleInputNewUser(e)}
                />
                <Button variant="outlined" onClick={() => handleCreateUser()}>
                  Criar novo avatar
                </Button>
              </UsersCreateDialogWrapper>
            </Dialog>
          )}
          <ToastContainer autoClose={2000} position="bottom-center" />
        </UsersContainer>
      )}
      <Footer />
    </>
  );
};
export default Users;
