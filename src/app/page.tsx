import { Box, Typography } from "@mui/material";
import Input from "@/components/Input";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        flexDirection: "column",
        width: "100vw",
      }}>
      <Typography variant='h3' style={{ fontWeight: "bold" }}>
        Todo App
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Input />
        <Todos />
      </Box>
    </Box>
  );
}
