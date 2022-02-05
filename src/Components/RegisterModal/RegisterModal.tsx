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
import "./RegisterModal.css";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export interface RegisterFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  onClose,
  title = "Создайте учетную запись",
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

  const onSubmit = async (data: RegisterFormProps) => {
    // dispatch(fetchSignUp(data));
    console.log("onSubmit");
  };

  // сохраняем Имя в локальный стейт
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  // сохраняем Логин в локальный стейт
  const userChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  // сохраняем Логин в локальный стейт
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  // сохраняем Парль в локальный стейт
  const pasChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // сохраняем копию Пароля в локальный стейт
  const pasCopyChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCopy(event.target.value);
  };

  return (
    <ModalBlock
      visible={open}
      onClose={onClose}
      // classes={classes}
      title={title}
    >
      <div className="register-modal">
        <TwitterIcon color="primary" className={"register-modal__icon"} />
        <CloseIcon
          className={"register-modal__close"}
          onClick={() => onClose()}
        />
        <form onSubmit={handleSubmit}>
          <div className="register-modal__title">
            Создайте учетную запись
          </div>
          <div>
            <input
              className="register-modal__input"
              type="text"
              onChange={nameChangeHandler}
              id="first-name"
              placeholder="Имя"
            />
          </div>
          <div>
            <input
              className="register-modal__input"
              type="text"
              onChange={userChangeHandler}
              id="login"
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              className="register-modal__input"
              type="text"
              onChange={emailChangeHandler}
              id="eMail"
              placeholder="E-Mail"
            />
          </div>
          <div>
            <input
              className="register-modal__input"
              type="text"
              onChange={pasChangeHandler}
              id="password"
              placeholder="Пароль"
            />
          </div>
          <div>
            <input
              className="register-modal__input"
              type="text"
              onChange={pasCopyChangeHandler}
              id="passwordCopy"
              placeholder="Повторите Пароль"
            />
          </div>

          <Button
            // disabled={loadingStatus === LoadingStatus.LOADING}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Регистрация
          </Button>
        </form>
      </div>
    </ModalBlock>
  );
};

export default RegisterModal;
