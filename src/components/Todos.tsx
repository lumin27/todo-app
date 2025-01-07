import { prisma } from "@/libs/prisma";
import { Box, IconButton } from "@mui/material";
import ChangeTodo from "./ChangeTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo } from "@/libs/actions";

async function getTodos() {
  const todos = await prisma.todo.findMany({
    select: { title: true, id: true, isCompleted: true },
    orderBy: { createdAt: "asc" },
  });
  return todos;
}
const Todos = async () => {
  const todos = await getTodos();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 2,
      }}>
      {todos.map((todo) => (
        <Box key={todo.id} display={"flex"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ccc",
              minWidth: "100%",
              px: 1,
              mb: 1,
              borderRadius: 2,
              bgcolor: todo.isCompleted ? "#f5f5f5" : "#fff",
            }}>
            <Box>{todo.title}</Box>
            <ChangeTodo todo={todo} />
          </Box>
          <Box component={"form"} action={deleteTodo}>
            <IconButton type='submit'>
              <DeleteIcon />
              <input type='hidden' name='id' value={todo.id} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Todos;
