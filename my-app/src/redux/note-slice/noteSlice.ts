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
    setNoteToList(state, action: PayloadAction<INote>) {
      state.noteList = [...state.noteList, action.payload];
    },
  },
});
export const { setNoteToList } = noteSlice.actions;
export default noteSlice.reducer;
