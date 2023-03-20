import { INote } from '../../types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INoteSlice {
  note: INote;
  noteList: INote[];
}
const initialState: INoteSlice = {
  note: {
    id: '',
    title: '',
    description: '',
  },
  noteList: [],
};
export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNoteToListAction(state, action: PayloadAction<INote>) {
      state.noteList = [...state.noteList, action.payload];
    },
    removeNoteFromListAction(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload);
    },
  },
});
export const { setNoteToListAction, removeNoteFromListAction } = noteSlice.actions;
export default noteSlice.reducer;
