import { createSlice } from "@reduxjs/toolkit";
import { logOut } from 'redux/auth/operations';
import {fetchContacts, addContact, deleteContact} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const handleAddContactFulfilled=(state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
  state.contacts.splice(index, 1);
};

const handleLogOutFulfilled = (state)=>{
  state.contacts = [];
  state.error = null;
  state.isLoading = false;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      contacts:[],
      isLoading: false,
      error: null,
    },
    
    extraReducers: (builder) => {
      builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending,handlePending)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
            .addCase(deleteContact.rejected, handleRejected) 
            .addCase(logOut.fulfilled, handleLogOutFulfilled)
    },
  
});

export const contactsReducer = contactsSlice.reducer;