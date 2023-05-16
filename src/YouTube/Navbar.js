import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { login, search } from "./DataSlice";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./leftSideNavbar.scss";
import "./Navbar.scss";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Navigate = useNavigate();
  const state = useSelector(({ data }) => data);
  const oneUser = state.users;
  const dispatch = useDispatch();
  const body = document.querySelector("body");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    dispatch(login(false));
    localStorage.setItem("login", JSON.stringify(false));
  };

  const Styles = {
    width: "10%",
    display: "flex",
  };

  const homeStyles = {
    cursor: "pointer",
  };

  const Home = () => {
    Navigate("/home");
  };

  const [toggleDark, setToggleDark] = useState(false);
  const toggleDarkMode = () => {
    body.classList.toggle("dark");
    setToggleDark(body.classList.toggle(true));
  };

  return (
    <>
      <div
        className={`${
          state?.login ? "navbar-container navbar-change" : "navbar-container"
        }`}
      >
        <div className="navbar-row">
          <div className="navbar-col-1">
            <div className="navbar-menu" onClick={toggleDarkMode}>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} />}
                />
              </FormGroup>
            </div>
            <div className="navbar-icon">
              {toggleDark ? (
                <img
                  className="youtube-icon"
                  src={require("../image/yt_logo_rgb_dark.png")}
                  onClick={Home}
                  style={homeStyles}
                />
              ) : (
                <img
                  className="youtube-icon"
                  src={require("../image/yt_logo_rgb_light.png")}
                  onClick={Home}
                  style={homeStyles}
                />
              )}
            </div>
          </div>
          <div className="navbar-col-2">
            <div className="navbar-search-card">
              <input className="navbar-search-input" placeholder="search" onChange={(e) => dispatch(search(e.target.value))} />
              <div className="navbar-search-icon">
                <SearchIcon />
              </div>
            </div>
            <div className="navbar-mike">
              <KeyboardVoiceIcon />
            </div>
          </div>
          {state?.login ? (
            <div className="navbar-col-1">
              <div className="navbar-cam-icon">
                <VideoCameraBackOutlinedIcon />
              </div>
              <div className="navbar-msg-icon">
                <NotificationsNoneOutlinedIcon />
              </div>
              <div className="navbar-profile">
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      {state?.login ? (
                        [oneUser]?.map((e, i) => {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={e.image} />
                            </Stack>
                          );
                        })
                      ) : (
                        <AccountCircle />
                      )}
                    </IconButton>
                    {state?.login ? (
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <div>
                          {[oneUser]?.map((e, i) => (
                            <div className="mydata" key={i}>
                              <div className="userimage">
                                <img
                                  className="user"
                                  src={e.image}
                                  alt="my image"
                                ></img>
                              </div>
                              <div className="userpara">
                                <p>{e.userName}</p>
                                <p>{e.email}</p>
                              </div>
                            </div>
                          ))}
                          <p className="userpara2">
                            Manage Your Google Account
                          </p>
                        </div>
                        <MenuItem onClick={handleClose}>
                          <AccountBoxOutlinedIcon
                            style={{ marginRight: "20px" }}
                          />{" "}
                          Your Channel
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <SwitchAccountOutlinedIcon
                            style={{ marginRight: "20px" }}
                          />
                          Switch Account
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            logOut();
                          }}
                        >
                          <LogoutOutlinedIcon style={{ marginRight: "20px" }} />
                          Logout
                        </MenuItem>
                      </Menu>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="logged-like" style={Styles}>
              <Link to="/sign" className="log-sign" style={{ padding: "5px" }}>
                <Icon className="log-icon" icon="mdi:user-circle-outline" />{" "}
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
