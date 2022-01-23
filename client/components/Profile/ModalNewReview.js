import React from 'react';

export default function ModalNewReview() {
  return (
    <>
      <label for="my-modal-2" class="btn btn-xs btn-warning hover:bg-orange-500 modal-button">Leave a review</label>
      <input type="checkbox" id="my-modal-2" class="modal-toggle"/>
      <div class="modal items-center">
        <div class="modal-box">
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between items-center modal-action">
              <label className='text-sm font-semibold'>Bob Johnson</label>
              <label for="my-modal-2" className="btn btn-xs btn-error rounded-full">x cancel</label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Leave your review</span>
              </label>
              <textarea class="textarea h-24 textarea-bordered textarea-info"></textarea>
            </div>
          </div>
          <div class="modal-action justify-between items-center">
            <div className="rating rating-lg">
              {
                [1, 2, 3, 4, 5].map(num => (
                  <input key={num} type="radio" className="mask mask-heart bg-error"/>
                ))
              }
            </div>
            <label for="my-modal-2" className="btn btn-primary">POST</label>
          </div>
        </div>
      </div>
    </>
  )
}
