import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { setNoteToListAction } from '../../redux/note-slice/noteSlice';
import { INote, INoteFormData } from '../../types/type';
import './createNoteFormStyle.css';

export default function CreateNoteForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitSuccessful },
  } = useForm<INoteFormData>({ mode: 'onBlur' });

  const noteCreateHandler: SubmitHandler<INoteFormData> = (formData: INoteFormData) => {
    const id = Date.now().toString();
    const currentNote: INote = {
      id,
      title: formData.title,
      description: formData.description,
    };
    console.log(currentNote);
    dispatch(setNoteToListAction(currentNote));
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <h1>Create your note</h1>
      <form className="note-form" onSubmit={handleSubmit(noteCreateHandler)}>
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
        <button disabled={!isValid} className="note-form_submit-button" type="submit">
          Add new note
        </button>
      </form>
    </>
  );
}
