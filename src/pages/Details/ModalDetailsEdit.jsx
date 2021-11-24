import { useState } from "react";
import { useParams } from "react-router";
import { editUserProfile } from "../../services/RequestApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UsersDetailsDialogWrapper } from "./styles";
import { Button, TextField } from "@mui/material";

const ModalDetailsEdit = (props) => {
  const [editUser, setEditUser] = useState({
    name: "",
    avatar: "",
  });

  const { name, avatar } = editUser;
  const { id } = useParams();

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditProfile = async () => {
    if(!editUser.name) return toast.error('Nome inválido.')
    if(!editUser.avatar) return toast.error('Imagem url inválida.')
    await editUserProfile({ id, name, avatar }).then(() => {
      setEditUser({ name: "", avatar: "" });
      props.onEdit(true);
    });
  };

  return (
    <UsersDetailsDialogWrapper>
      <TextField value={name} label="Insira o nome do Avatar" name="name" variant="outlined" onChange={(e) => handleSetState(e)} />
      <TextField value={avatar} label="https://url-da-imagem-avatar.com/r" name="avatar" variant="outlined" onChange={(e) => handleSetState(e)} />
      <Button variant="outlined" onClick={() => handleEditProfile(id)}>Editar avatar</Button>
    </UsersDetailsDialogWrapper>
  );
};

export default ModalDetailsEdit;
