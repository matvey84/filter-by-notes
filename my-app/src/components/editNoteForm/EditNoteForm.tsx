import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editNoteAction } from '../../redux/note-slice/noteSlice';
import { INoteFormData, INote } from '../../types/type';
import './editNoteFormStyle.css';
interface IProp {
  id: string;
  setIsEdit: (isEdit: boolean) => void;
  isEdit: boolean;
}
function EditNoteForm(props: IProp) {
  const editedNoteid = props.id;
  const setIsEdit = props.setIsEdit;
  const isEdit = props.isEdit;
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
      isTag: currentNote.isTag,
    };
    formData.title === currentNote.title && formData.description === currentNote.description
      ? null
      : dispatch(editNoteAction(newNoteValue));

    setIsEdit(!isEdit);
  };

  return (
    <>
      <form className="note-form" onSubmit={handleSubmit(editNoteHandler)}>
        <h2 className="edit-form_main-title">Edit note</h2>
        <fieldset>
          <legend>Now you can fix the title</legend>
          <input
            {...register('title', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'Should be min 5 character',
              },
            })}
            className="edit-form-input_title"
            type="text"
            placeholder="please, don't leave me empty"
          />
        </fieldset>
        <fieldset>
          <legend>... and description</legend>
          <textarea
            {...register('description', {
              required: 'This field is requaered',
              minLength: {
                value: 5,
                message: 'Should be min 5 character',
              },
            })}
            placeholder="please, don't leave me empty"
            className="edit-note-form-input_description"
          />
        </fieldset>
        <button disabled={!isValid} className="note-form_submit-button" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default EditNoteForm;
