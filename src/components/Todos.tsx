"use client";

import { Box, CircularProgress, Paper } from "@mui/material";
import ChangeTodo from "./ChangeTodo";
import { getTodos } from "@/libs/actions";
import { useEffect, useState } from "react";
import { Props } from "./ChangeTodo";
const Todos = ({ todos }: { todos: Props[] }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "95%", sm: "80%", md: "75%" },
        mt: 2,
      }}>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {todos.map((todo) => (
        <Paper key={todo.id} sx={{ p: 2, mb: 1 }}>
          <ChangeTodo todo={todo} key={todo.id} />
        </Paper>
      ))}
    </Box>
  );
};

export default Todos;
