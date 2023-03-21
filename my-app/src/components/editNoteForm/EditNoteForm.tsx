import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editNoteAction, setNoteToListAction } from '../../redux/note-slice/noteSlice';
import { INoteFormData, INote } from '../../types/type';
interface IProp {
  id: string;
  setIsChange: (isChange: boolean) => void;
  isChange: boolean;
}
function EditNoteForm(props: IProp) {
  const editedNoteid = props.id;
  const setIsChange = props.setIsChange;
  const isChange = props.isChange;
  const currentNote: INote = useAppSelector((state) =>
    state.noteSlice.noteList.filter((note) => note.id === editedNoteid).at(-1)
  )!;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<INoteFormData>({
    mode: 'onBlur',
    defaultValues: {
      title: currentNote.title,
      description: currentNote.description,
    },
  });

  const editNoteHandler: SubmitHandler<INoteFormData> = (formData: INoteFormData) => {
    const newNoteValue: INote = {
      id: editedNoteid,
      title: formData.title,
      description: formData.description,
    };
    formData.title === currentNote.title && formData.description === currentNote.description
      ? null
      : dispatch(editNoteAction(newNoteValue));
    setIsChange(!isChange);
  };

  return (
    <>
      <form className="note-form" onSubmit={handleSubmit(editNoteHandler)}>
        <input
          {...register('title', {
            required: 'This field is required',
            minLength: {
              value: 5,
              message: 'Should be min 5 character',
            },
          })}
          className="note-form-input note-form-input_title"
          type="text"
          placeholder="Add your todo"
        />
        <input
          autoComplete="off"
          {...register('description', {
            required: 'This field is requaered',
            minLength: {
              value: 5,
              message: 'Should be min 5 character',
            },
          })}
          type="text"
          placeholder="description"
          className="note-form-input note-form-input_description"
        />
        <button
          // onClick={() => setIsChange(!isChange)}
          disabled={!isValid}
          className="note-form_submit-button"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default EditNoteForm;
