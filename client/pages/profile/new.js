import Container from '../../components/ui/Container';

function NewProfile() {
  return (
    <Container title='New Profile'>
      <div className="mx-2">
        <div className='flex justify-between p-2 gap-4'>
          <div class="form-control gap-2 w-full">
            <div>
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input type="text" class="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input type="text" class="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" class="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Postal Code</span>
              </label>
              <input type="text" class="input input-sm input-bordered w-full sm:w-80"/>
            </div>
          </div>

          <img className="rounded-full border bg-gray-300 border-gray-600 h-32 w-32 block" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image" />
        </div>

        <div className='flex flex-col p-2'>
          <label class="label">
            <span class="label-text">Your bio</span>
          </label>
          <textarea class="textarea h-24 textarea-bordered"></textarea>
        </div>

        <div className='mt-4'>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
          Resources
          </h1>
          <div className="flex flex-col sm:w-96">
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" class="toggle toggle-primary" checked/>
              </div>
            </div>
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" class="toggle toggle-primary" /*checked*//>
              </div>
            </div>
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" class="toggle toggle-primary" checked/>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-4'>
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </Container>)
}

export default NewProfile;