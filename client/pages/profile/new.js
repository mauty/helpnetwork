import Container from '../../components/ui/Container';
import useAuth from '../../hooks/useAuth';

function NewProfile() {
  useAuth();

  return (
    <Container title='New Profile'>
      <div className="mx-2">
        <div className='flex justify-between p-2 gap-4'>
          <div className="form-control gap-2 w-full">
            <div>
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="text" className="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="text" className="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" className="input input-sm input-bordered w-full sm:w-80"/>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Postal Code</span>
              </label>
              <input type="text" className="input input-sm input-bordered w-full sm:w-80"/>
            </div>
          </div>

          <img className="rounded-full border bg-gray-300 border-gray-600 h-32 w-32 block" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image" />
        </div>

        <div className='flex flex-col p-2'>
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea className="textarea h-24 textarea-bordered"></textarea>
        </div>

        <div className='mt-4'>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
          Resources
          </h1>
          <div className="flex flex-col sm:w-96">
            <div className="alert-sm alert-info rounded m-1">
              <div className="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" className="toggle toggle-primary" checked/>
              </div>
            </div>
            <div className="alert-sm alert-info rounded m-1">
              <div className="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" className="toggle toggle-primary" /*checked*//>
              </div>
            </div>
            <div className="alert-sm alert-info rounded m-1">
              <div className="flex justify-between items-center">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
                <input type="checkbox" className="toggle toggle-primary" checked/>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-4'>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </Container>)
}

export default NewProfile;