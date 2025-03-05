"use client";

import { Box, Button, IconButton, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { changeStatus, editTodo } from "@/libs/actions";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export interface Props {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
const ChangeTodo = ({ todo }: { todo: Props }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEdit(!edit);
  };
  const handlSubmit = () => {
    setEdit(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        {edit ? null : (
          <IconButton>
            <EditIcon
              onClick={handleEdit}
              sx={{ color: todo.isCompleted ? "red" : "green" }}
            />
          </IconButton>
        )}
        {edit ? (
          <Box component={"form"} action={editTodo} onSubmit={handlSubmit}>
            <Box>
              <input type='hidden' name='id' value={todo.id} />
              <TextField defaultValue={todo.title} name='title' size='small' />
              <Button variant='contained' sx={{ ml: 5 }} type='submit'>
                Save
              </Button>
            </Box>
          </Box>
        ) : null}
      </Box>
      <Box component={"form"} action={changeStatus}>
        <IconButton type='submit'>
          <DoneIcon sx={{ color: todo.isCompleted ? "green" : "red" }} />
          <input type='hidden' name='id' value={todo.id} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChangeTodo;
