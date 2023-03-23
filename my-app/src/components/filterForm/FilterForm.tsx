import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterNoteAction, setIsFilterAction } from '../../redux/note-slice/noteSlice';
import { IFilterQuery } from '../../types/type';
import ButtonFilterNote from '../../ui/ButtonFilterNote';
import ButtonResetFilter from '../../ui/ButtonResetFilter';
import './filterFormStyle.css';

export default function FilterForm() {
  const dispatch = useAppDispatch();
  const filterQuery = useAppSelector((state) => state.noteSlice.query);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFilterQuery>({
    mode: 'all',
    defaultValues: {
      filterQuery,
    },
  });

  const filterHandler: SubmitHandler<IFilterQuery> = (formData: IFilterQuery) => {
    const { filterQuery } = formData;
    dispatch(filterNoteAction(filterQuery));
    dispatch(setIsFilterAction(true));
  };

  return (
    <>
      <form className="filter-form" onSubmit={handleSubmit(filterHandler)}>
        <ButtonResetFilter />
        <fieldset>
          <legend> Filter</legend>
          <input
            autoComplete="off"
            {...register('filterQuery', {
              required: 'This field is required',
              minLength: {
                value: 1,
                message: 'Should be min 1 character',
              },
            })}
            className="filter-form-input_query"
            type="text"
            id="note-title"
            placeholder="Search here"
          />
          <ButtonFilterNote isValid={isValid} />
        </fieldset>
      </form>
    </>
  );
}
