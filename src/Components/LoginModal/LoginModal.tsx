import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../../pages/SignIn/SignIn";
import ModalBlock from "../../Components/ModalBlock/ModalBlock";
import { LoadingStatus } from "../../store/types";
import "./LoginModal.css";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export interface LoginFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
  title = "Вход в Твиттер",
}) => {
  const [loadingStatus] = useState<boolean>(false);
  const [fullname, setFullName] = useState<string | number>("");
  const [login, setLogin] = useState<string | number>("");
  const [mail, setMail] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [passwordCopy, setPasswordCopy] = useState<string | number>("");

  // const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log({
      fullname,
      login,
      mail,
      password,
      passwordCopy,
    });
    // onSubmit();
  };

  const onSubmit = async (data: LoginFormProps) => {
    // dispatch(fetchSignUp(data));
    console.log("onSubmit");
  };


  // сохраняем Логин в локальный стейт
  const userChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  // сохраняем Парль в локальный стейт
  const pasChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  return (
    <ModalBlock
      visible={open}
      onClose={onClose}
      // classes={classes}
      title={title}
    >
      <div className="login-modal">
        <TwitterIcon color="primary" className={"login-modal__icon"} />
        <CloseIcon
          className={"login-modal__close"}
          onClick={() => onClose()}
        />
        <form onSubmit={handleSubmit}>
          <div className="login-modal__title">
            Вход в Твиттер
          </div>
          <div className="login-modal__input_container">
            <input
              className="login-modal__input"
              type="text"
              onChange={userChangeHandler}
              id="eMail"
              placeholder="Логин или e-mail"
            />
          </div>
          <div className="login-modal__input_container">
            <input
              className="login-modal__input"
              type="text"
              onChange={pasChangeHandler}
              id="password"
              placeholder="Пароль"
            />
          </div>
          <Button
            // disabled={loadingStatus === LoadingStatus.LOADING}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Далее
          </Button>
        </form>
      </div>
    </ModalBlock>
  );
};

export default LoginModal;
