import { createTodos } from "@/libs/actions";
import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <Box
      component={"form"}
      action={createTodos}
      mt={3}
      sx={{ display: "flex", width: "500px", gap: 2 }}>
      <TextField
        placeholder='Add Todo here...'
        size='small'
        fullWidth
        name='title'
        label='Add Todo here...'
      />
      <Button variant='contained' type='submit'>
        Add
      </Button>
    </Box>
  );
};

export default Input;
