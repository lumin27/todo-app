"use client";

import { createTodos } from "@/libs/actions";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Input = () => {
  const [adding, setAdding] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant='h3' style={{ fontWeight: "bold" }}>
          Todo App
        </Typography>
      </Box>
      <Paper
        elevation={2}
        sx={{
          py: 2,
          px: { xs: 1, sm: 2 },
          width: { xs: "95%", sm: "100%" },
        }}>
        <Box
          component={"form"}
          action={createTodos}
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
          }}>
          <TextField
            sx={{ width: { xs: "300px", sm: "530px", md: "700px" } }}
            name='title'
            size='small'
            placeholder='Enter your todo'
            type='text'
          />
          <Button
            onClick={() => setAdding(true)}
            type='submit'
            variant='contained'
            disabled={adding}
            startIcon={
              adding ? (
                <CircularProgress size={16} color='inherit' />
              ) : (
                <AddCircleIcon />
              )
            }>
            {adding ? "Adding..." : "Add"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Input;
