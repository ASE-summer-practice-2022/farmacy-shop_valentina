import { Login, Logout, ShoppingCart } from "@mui/icons-material";
import { AppBar, Avatar, Container, Fab, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/imgs/logo.png";
import { AuthPopup } from "../../components";
import { useStore } from "../../hooks";

function Header() {
  const navigate = useNavigate();
  const { userStore } = useStore();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navCart = () => navigate("/cart");
  const navHome = () => navigate("/");
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  const logout = async () => {
    await userStore.logout();
    navigate("/", { replace: true });
  };

  let ActionPanel: React.ReactElement;

  if (userStore.isAuthorized) {
    ActionPanel = (
      <>
        <Fab color="primary" aria-label="cart" onClick={navCart}>
          <ShoppingCart />
        </Fab>
        <Fab color="primary" aria-label="logout" onClick={logout}>
          <Logout />
        </Fab>
      </>
    );
  } else {
    ActionPanel = (
      <Fab color="primary" aria-label="login" onClick={togglePopup}>
        <Login />
      </Fab>
    );
  }

  return (
    <AppBar position="static">
      <AuthPopup open={isPopupOpen} close={togglePopup} />
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" py={2} gap={3}>
          <Avatar src={logo} sx={{ height: 75, width: 75, cursor: "pointer" }} onClick={navHome} />
          <Typography variant="h1" flex={1}>
            Травы.ru
          </Typography>
          {ActionPanel}
        </Stack>
      </Container>
    </AppBar>
  );
}

export default observer(Header);
