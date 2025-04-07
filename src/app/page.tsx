import { Box } from "@mui/material";
import Input from "@/components/Input";
import Todos from "@/components/Todos";
import { getTodos } from "@/libs/actions";

export default async function Home() {
  const todos = await getTodos();
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Input />
      <Todos todos={todos} />
    </Box>
  );
}
