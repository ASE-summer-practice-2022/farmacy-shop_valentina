import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";

import { useStore } from "../../hooks";

interface IRegisterProps {
  close: () => void;
}

function Register({ close }: IRegisterProps) {
  const { userStore } = useStore();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    close();
    await userStore.register(form);
  };

  return (
    <Container maxWidth="xs">
      <Stack component="form" gap={2} mt={3} onSubmit={submit}>
        <Typography align="center" variant="h1">
          Регистрация
        </Typography>
        <TextField required autoFocus label="Имя" name="name" fullWidth />
        <TextField required label="E-mail" type="email" name="email" fullWidth />
        <TextField required label="Пароль" type="password" name="password" fullWidth />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
          Зарегистрироваться
        </Button>
      </Stack>
    </Container>
  );
}

export default observer(Register);
