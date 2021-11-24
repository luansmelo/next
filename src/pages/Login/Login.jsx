import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Content, Form } from "./styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const { push } = useHistory();
  const successToast = (message) => toast.success(message);
  const failtToast = (message) => toast.error(message);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputValidations = () => {
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(values.email)) {
      return failtToast("Informe email válido exemplo@mail.com");
    }
    if (!/^.{8,}/.test(values.password)) {
      return failtToast("Sua senha deve conter 8 caracteres ou mais");
    }
    successToast("Usuário logado!") &&
      setTimeout(function () {
        push("/users");
      }, 2000);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <img src="./next-logo.png" alt="logo" />
          <TextField
            label="Email"
            variant="outlined"
            onChange={handleChange("email")}
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="outlined" onClick={() => handleInputValidations()}>
            Login
          </Button>
          <ToastContainer autoClose={2000} position="bottom-center" />
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
