import { INote } from '../../types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INoteSlice {
  // note: INote;
  noteList: INote[];
  filteredNoteList: INote[];
  isFilter: boolean;
  query: string;
}
const initialState: INoteSlice = {
  // note: {
  //   id: '',
  //   title: '',
  //   description: '',
  //   isTag: boolean;ean
  // },
  noteList: [],
  filteredNoteList: [],
  isFilter: false,
  query: '',
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
    editNoteAction(state, action: PayloadAction<INote>) {
      state.noteList = state.noteList.map((note) => {
        return {
          ...note,
          title: note.id === action.payload.id ? action.payload.title : note.title,
          description:
            note.id === action.payload.id ? action.payload.description : note.description,
        };
      });
    },
    removeCurrentNoteAction(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload);
      if (state.isFilter) {
        state.noteList = state.noteList.filter((note) => note.id !== action.payload);
        state.filteredNoteList = state.filteredNoteList.filter(
          (note) => note.id !== action.payload
        );
      }
    },
    filterNoteAction(state, action: PayloadAction<string>) {
      state.query = action.payload;
      const result = Array.from(
        new Set(
          state.noteList.filter(
            (note) =>
              note.title.includes(action.payload) || note.description.includes(action.payload)
          )
        )
      );
      state.filteredNoteList = result;
    },
    setIsFilterAction(state, action: PayloadAction<boolean>) {
      state.isFilter = action.payload;
    },
    resetFilterAction(state) {
      state.isFilter = false;
      state.filteredNoteList = [];
      state.query = '';
    },
  },
});
export const {
  setNoteToListAction,
  removeNoteFromListAction,
  editNoteAction,
  removeCurrentNoteAction,
  filterNoteAction,
  setIsFilterAction,
  resetFilterAction,
} = noteSlice.actions;
export default noteSlice.reducer;
