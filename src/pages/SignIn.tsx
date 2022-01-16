import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/PeopleOutline";
// import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      height: "100vh",
    },
    blueSide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#71C9F8",
      flex: "0 0 50%",
      overflow: "hidden",
      position: "relative",
    },
    blueSideBigIcon: {
      position: "absolute",
      left: "50%",
      top: "53%",
      transform: "translate(-50%, -50%)",
      width: "260%",
      height: "260%",
    },
    blueSideListInfo: {
      position: "relative",
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: 380,
      "& h6": {
        display: "flex",
        alignItems: "center",
        color: "white",
        fontWeight: 700,
        fontSize: 20,
      },
    },
    blueSideListInfoItem: {
      marginBottom: 40,
    },
    blueSideListInfoIcon: {
      fontSize: 32,
      marginRight: 15,
    },
    loginSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 50%",
    },
    loginSideTwitterIcon: {
      fontSize: 45,
    },
    loginSideWrapper: {
      width: 380,
    },
    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 60,
      marginTop: 20,
    },
    loginSideField: {
      marginBottom: 18,
    },
    registerField: {
      marginBottom: theme.spacing(5),
    },
    loginFormControl: {
      marginBottom: theme.spacing(2),
    },
  })
);

export const SignIn: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <ul>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineOutlinedIcon
                className={classes.blueSideListInfoIcon}
              />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography
            className={classes.loginSideTitle}
            gutterBottom
            variant="h4"
          >
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            // onClick={handleClickOpenSignUp}
            style={{
              marginBottom: 20,
              width: "300px",
              borderRadius: "9999px",
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            // onClick={handleClickOpenSignIn}
            style={{
              width: "300px",
              borderRadius: "9999px",
              color: "#1d9bf0",
              fontWeight: 700,
            }}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
