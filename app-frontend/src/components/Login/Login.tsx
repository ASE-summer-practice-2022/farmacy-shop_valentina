import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";

import { useStore } from "../../hooks";

interface ILoginProps {
  close: () => void;
}

function Login({ close }: ILoginProps) {
  const { userStore, cartStore } = useStore();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    close();
    await userStore.login(form);
    await cartStore.getCartItems();
  };

  return (
    <Container maxWidth="xs">
      <Stack component="form" gap={2} mt={3} onSubmit={submit}>
        <Typography align="center" variant="h1">
          Вход
        </Typography>
        <TextField required autoFocus label="E-mail" type="email" name="email" fullWidth />
        <TextField required label="Пароль" type="password" name="password" fullWidth />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
          Войти
        </Button>
      </Stack>
    </Container>
  );
}

export default observer(Login);
