import { Box } from "@mui/material";
import Input from "@/components/Input";
import Todos from "@/components/Todos";

export default function Home() {
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
      <Todos />
    </Box>
  );
}
