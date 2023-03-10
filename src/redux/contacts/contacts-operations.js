import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/contacts";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async(_, thunkAPI) => {
        try {
            const data = await api.getAllContacts();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)

export const fetchAddContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: ({name, number}, {getState}) => {
            const {contacts} = getState();
            const normalizedNume = name.toLowerCase();
            const normalizedNumber = number.toLowerCase();
            const result = contacts.items.find(({ name, number }) => {
                return (name.toLowerCase() === normalizedNume && number.toLowerCase() === normalizedNumber)
            })
            if(result){
                alert(`${name}. Number: ${number} is already ixist`);
                return false;
            }
        }
    }
)

export const fetchDeleteContact = createAsyncThunk(
    "contacts/delete",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteContact(id);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
)