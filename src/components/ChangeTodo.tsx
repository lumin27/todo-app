"use client";

import {
  Box,
  Checkbox,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { changeStatus, deleteTodo, editTodo } from "@/libs/actions";

export interface Props {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const ChangeTodo = ({ todo }: { todo: Props }) => {
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEdit(!edit);
    setEditingId(todo.id);
    setEditText(todo.title || "");
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handlSubmit = () => {
    setEdit(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component={"form"}
          action={async (formData) => {
            setLoading(true);
            await changeStatus(formData);
            setLoading(false);
          }}>
          <input type='hidden' name='id' value={todo.id} />
          <Checkbox
            checked={todo.isCompleted}
            disabled={loading}
            onChange={(e) => {
              const form = e.currentTarget.form;
              const hidden = document.createElement("input");
              hidden.type = "hidden";
              hidden.name = "isCompleted";
              hidden.value = String(e.target.checked);
              form?.appendChild(hidden);
              form?.requestSubmit();
            }}
          />
        </Box>
        {editingId === todo.id ? (
          <TextField
            sx={{ width: { xs: "240px", sm: "300px", md: "700px" } }}
            size='small'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            disabled={todo.isCompleted}
          />
        ) : (
          <Typography
            component='label'
            htmlFor={`todo-${todo.id}`}
            sx={{
              flex: 1,
              ...(todo.isCompleted && {
                textDecoration: "line-through",
                color: "text.secondary",
              }),
            }}>
            {todo.title}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}>
        {editingId === todo.id ? (
          <>
            <Box
              component={"form"}
              action={async (formData) => {
                setLoading(true);
                await editTodo(formData);
                setLoading(false);
                setEdit(false);
              }}>
              <input type='hidden' name='id' value={todo.id} />
              <input type='hidden' name='title' value={editText} />
              <IconButton
                onClick={handlSubmit}
                type='submit'
                size='small'
                color='primary'
                disabled={loading}>
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <CheckIcon fontSize='small' />
                )}
              </IconButton>
            </Box>

            <IconButton size='small' onClick={cancelEditing} color='default'>
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              size='small'
              onClick={() => handleEdit()}
              color='primary'
              disabled={todo.isCompleted}>
              <EditIcon fontSize='small' />
            </IconButton>
            <Box
              component={"form"}
              action={async (formData) => {
                setLoading(true);
                await deleteTodo(formData);
                setLoading(false);
              }}>
              <input type='hidden' name='id' value={todo.id} />
              <IconButton type='submit' disabled={loading}>
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <DeleteIcon color='error' />
                )}
              </IconButton>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ChangeTodo;
