import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import PublishIcon from "@mui/icons-material/Publish";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, users } from "./DataSlice";
import LeftSideNavbar from "./LeftSideNavbar";
import youtube from "../image/yt_logo_rgb_light.png";
import FastForwardIcon from "@mui/icons-material/FastForward";
import "./leftSideNavbar.scss";

const Sign = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Submit, setSubmit] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(({ data }) => data.users);

  const UserDetails = [
    {
      userName: "Selva",
      password: "selva@97",
      email: "selvam1796@gmail.com",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2FWhatsApp%20Image%202023-05-04%20at%2012.32.31%20PM.jpeg?alt=media&token=e7f9508f-123c-4870-baf2-15cf650c8a25",
    },
    {
      userName: "Karthick",
      password: "karthick",
      email: "karthick@gmail.com",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2FWhatsApp%20Image%202023-05-03%20at%203.20.50%20PM.jpeg?alt=media&token=3f7624ac-2d47-45dd-9130-4450129cd40d",
    },
    {
      userName: "LingaRaj",
      password: "lingaraj",
      email: "lingaraj@gmail.com",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2F1678943366834.jpg?alt=media&token=d33b54eb-ca93-49d8-a80a-dc20d3892dea",
    },
  ];

  const inputHandle = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const submit = () => {
    let Set = UserDetails.find(
      (value) => value.userName == Name && value.password == Password
    );
    if (Set) {
      toast("Success");
      setTimeout(() => {
        Navigate("/home");
        localStorage.setItem("login", JSON.stringify(true));
        dispatch(login(true));
        dispatch(users(Set));
        localStorage.setItem("users", JSON.stringify(Set));
      }, 6000);
    } else {
      alert("Error");
    }
    console.log(state);
    console.log(Set);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <LeftSideNavbar />
      </div>
      <div className="UI">
        <h1>Sign in</h1>
        <div className="youtube_logo">
          <img src={youtube} alt="youtube"></img>
        </div>
        <form>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Username
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                placeholder="Type Your username"
                value={Name}
                name="name"
                onChange={inputHandle}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
              />
              {Name === "" && Submit && <p>Name invalid</p>}
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                placeholder="Type Your password"
                value={Password}
                name="pass"
                onChange={inputHandle}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {Password === "" && Submit && <p>Password invalid</p>}
            </FormControl>
          </Box>
          <Button
            className="btn"
            variant="contained"
            onClick={() => submit()}
            endIcon={<FastForwardIcon />}
          >
            Submit
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Sign;
