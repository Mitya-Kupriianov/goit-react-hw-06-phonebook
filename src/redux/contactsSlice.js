import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-22' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    delContact: (state, action) => {
      //   console.log('🚀 ~ file: contactsSlice.js ~ line 18 ~ state', state);
      //   state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contacReducer = contactsSlice.reducer;
