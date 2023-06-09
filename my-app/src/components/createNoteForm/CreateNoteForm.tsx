import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { resetFilterAction, setNoteToListAction } from '../../redux/note-slice/noteSlice';
import { INote, INoteFormData } from '../../types/type';
import ButtonCreateNote from '../../ui/ButtonCreateNote';
import './createNoteFormStyle.scss';

export default function CreateNoteForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitSuccessful },
  } = useForm<INoteFormData>({ mode: 'onBlur' });

  const noteCreateHandler: SubmitHandler<INoteFormData> = (formData: INoteFormData) => {
    const isTag =
      formData.title.split(' ').some((word) => word[0] === '#') ||
      formData.description.split(' ').some((word) => word[0] === '#');

    const id = Date.now().toString();
    const currentNote: INote = {
      id,
      title: formData.title,
      description: formData.description,
      isTag,
    };
    dispatch(setNoteToListAction(currentNote));
    dispatch(resetFilterAction());
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <h1>Create your note</h1>
      <form className="note-form" onSubmit={handleSubmit(noteCreateHandler)}>
        <fieldset form="note-title">
          <legend> Note title</legend>
          <input
            {...register('title', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'Should be min 5 character',
              },
            })}
            className="note-form-input_title"
            type="text"
            id="note-title"
            placeholder="Title: [should be min 5 character]"
          />
        </fieldset>
        <fieldset>
          <legend>Description</legend>
          <textarea
            {...register('description', {
              required: 'This field is requaered',
              minLength: {
                value: 5,
                message: 'Should be min 5 character',
              },
            })}
            placeholder="Description: [should be min 5 character]"
            className="note-form-input_description"
          />
        </fieldset>
        <ButtonCreateNote isValid={isValid} />
      </form>
    </>
  );
}
