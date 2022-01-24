import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import useAxios from '../../hooks/useAxios';

export default function ModalNewReview({ currentUser, profileId, router }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutation(newReview => useAxios({ url: `/profile/${profileId}/newReview`, method: "post", params: newReview }))

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      body: "",
      rating: "5"
    }
  });

  function onSubmit(formData) {
    mutation.mutate({ ...formData, userId: currentUser.id }, {
      onSuccess: () => {
        router.reload(window.location.pathname);
      }
    });
  }

  return (
    <>
      <button onClick={() => { setIsModalOpen(true) }} className="btn btn-xs btn-warning hover:bg-orange-500 modal-button">Leave a review</button>
      <input type="checkbox" id="my-modal-2" className="modal-toggle"/>
      <div className={clsx("modal items-center", isModalOpen && "modal-open")}>
        <div className="modal-box">
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between items-center modal-action">
              <p className='text-sm font-semibold'>Bob Johnson</p>
              <button className="btn btn-xs btn-error rounded-full modal-button" onClick={() => setIsModalOpen(false)}>x cancel</button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Leave your review</span>
              </label>
              <textarea className="textarea h-24 textarea-bordered textarea-info" {...register('body', { required: true, maxLength: 400 })}></textarea>
              {
                errors.body && (
                  <span className='text-sm text-red-700'>Please leave a message after the beat...</span>
                )
              }
            </div>
          </div>
          {
            mutation.isError && (
              <p className='text-error'>Something unexpected happened while posting... Please try again</p>
            )
          }
          <div className="modal-action justify-between items-center">
            <div className="rating rating-lg">
              {
                [1, 2, 3, 4, 5].map(num => (
                  <input key={`NotOnlyUI${num}`} type="radio" value={num} className="mask mask-heart bg-error" {...register('rating')}/>
                ))
              }
            </div>
            <button onClick={handleSubmit(onSubmit)} className={clsx("btn btn-primary btn-sm modal-button", mutation.isLoading && "loading disabled")}>POST</button>
          </div>
        </div>
      </div>
    </>
  )
}
