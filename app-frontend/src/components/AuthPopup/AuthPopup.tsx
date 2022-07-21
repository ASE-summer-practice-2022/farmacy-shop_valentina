import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";

import Login from "../Login";
import Register from "../Register";

interface IAuthProps {
  close: () => void;
  open: boolean;
}

function AuthPopup({ open, close }: IAuthProps) {
  const [registered, setRegistered] = useState(false);

  const change = () => setRegistered(!registered);

  return (
    <Dialog fullWidth open={open} onClose={close}>
      <DialogContent>
        {registered ? <Login close={close} /> : <Register close={close} />}
        <Box textAlign="center" mt={3}>
          <Typography display="inline">{registered ? "Ещё не" : "Уже"} зарегистрированы?</Typography>
          <Button variant="text" sx={{ cursor: "pointer" }} onClick={change}>
            {registered ? "Создать аккаунт" : "Войти"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default AuthPopup;
