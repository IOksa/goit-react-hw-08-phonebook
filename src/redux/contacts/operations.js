import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//axios.defaults.baseURL = "https://64bd21e22320b36433c770d0.mockapi.io";

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
        const response = await axios.get("/contacts");
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);
// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );