import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';

import useAxios from '../../hooks/useAxios';

export default function ModalNewReview() {
  const mutation = useMutation(newProfile => useAxios({ url: `/profile`, method: "post", params: newProfile }))

  function onSubmit(formData) {
    // mutation.mutate({ id: currentUser.id, ...formData, personal_resources: enabledResources.map(value => parseInt(value)) }, {
    //   onSuccess: () => {
    //     // Add the data to the list or refetch
    //   }
    // });

    console.log(formData);
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  function handleClose() {

  }

  return (
    <>
      <label for="my-modal-2" className="btn btn-xs btn-warning hover:bg-orange-500 modal-button">Leave a review</label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle"/>
      <div className="modal items-center">
        <div className="modal-box">
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between items-center modal-action">
              <label className='text-sm font-semibold'>Bob Johnson</label>
              <label for="my-modal-2" className="btn btn-xs btn-error rounded-full">x cancel</label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Leave your review</span>
              </label>
              <textarea className="textarea h-24 textarea-bordered textarea-info" {...register('body', { required: true, maxLength: 400 })}></textarea>
              {
                errors.body && (
                  <span className='text-sm text-red-700'>{errors.body.message}</span>
                )
              }
            </div>
          </div>
          <div className="modal-action justify-between items-center">
            <div className="rating rating-lg">
              {
                [1, 2, 3, 4, 5].map(num => (
                  <input key={num} type="radio" value={num} checked className="mask mask-heart bg-error" {...register('rating')}/>
                ))
              }
            </div>
            <label for="my-modal-2" onClick={handleSubmit(onSubmit)} className="btn btn-primary">POST</label>
          </div>
        </div>
      </div>
    </>
  )
}
