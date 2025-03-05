import { Box } from "@mui/material";
import Input from "@/components/Input";
import Todos from "@/components/Todos";

export default function Home() {
  return (
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
  );
}
