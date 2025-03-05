import { createTodos } from "@/libs/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}>
      <Box>
        <Typography variant='h3' style={{ fontWeight: "bold" }}>
          Todo App
        </Typography>
      </Box>
      <Box
        component={"form"}
        action={createTodos}
        mt={3}
        sx={{
          display: "flex",
          width: { xs: "100%", md: "650px", lg: "750px" },
          gap: 2,
        }}>
        <TextField
          placeholder='Add Todo here...'
          // size='small'
          fullWidth
          name='title'
          label='Add Todo here...'
        />
        <Button variant='contained' type='submit'>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Input;
