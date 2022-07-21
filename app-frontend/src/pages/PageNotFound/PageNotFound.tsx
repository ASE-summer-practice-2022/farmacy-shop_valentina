import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const navHome = () => navigate("/");

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={20}>
        <Typography variant="h1">Страница не найдена (404)</Typography>
        <Typography>Нам не удалось найти запрошенной страницы =&#40;</Typography>
        <Button variant="contained" sx={{ mt: 3 }} onClick={navHome}>
          Вернуться на главную
        </Button>
      </Stack>
    </Container>
  );
}

export default PageNotFound;
