import { useState } from 'react';
import { useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Container from '../../components/ui/Container';
import { UserContext } from '../_app';

function EditProfile() {
  useAuth();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgURL, setImgURL] = useState("https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80")
  const [personalResources, setPersonalResources] = useState([]);

  const { currentUser } = useContext(UserContext);

  const { isLoading, isError, data } = useQuery('profile',
    () => useAxios({ url: `/profile/${currentUser.id}`, method: "get" }),
    { onSuccess: (data) => {
      if (data && data.imgURL) {
        setImgURL(data.imgURL);
      }

      if (data && data.personal_resources) {
        setPersonalResources(data.personal_resources.map(resource => resource.resource_id));
      }
    }}
  );

  const { isLoading: isResourcesLoading, isError: isResourcesError, data: resourceData } = useQuery('resources', () => useAxios({ url: `/resources`, method: "get" }));


  const mutation = useMutation(newProfile => useAxios({ url: `/profile`, method: "post", params: newProfile }))

  function onSubmit(formData) {
    const enabledResources = formData.personal_resources.filter(resource => {
      if(resource !== false) {
        return true;
      }
    })

    mutation.mutate({ id: currentUser.id, ...formData, personal_resources: enabledResources.map(value => parseInt(value)) });
    router.push('/profile');
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <Container title='Edit Profile'>
      { isLoading && <Shimmer/> }
      { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
      { data && (
        <div className="mx-2">
          <div className='flex p-2 gap-4'>
            <div className="form-control gap-2 w-full">
              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  defaultValue={data.first_name}
                  type="text"
                  className="input input-sm input-bordered w-full sm:w-80"
                  {...register('first_name', { required: true, maxLength: 15 })}/>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  defaultValue={data.last_name}
                  type="text"
                  className="input input-sm input-bordered w-full sm:w-80"
                  {...register('last_name', { required: true, maxLength: 15 })}/>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  defaultValue={data.email}
                  type="email"
                  className="input input-sm input-bordered w-full sm:w-80"
                  {...register('email', { required: true, maxLength: 30, pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i })}/>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Postal Code</span>
                </label>
                <input
                  defaultValue={data.postal_code}
                  type="text"
                  className="input input-sm input-bordered w-full sm:w-80"
                  {...register('postal_code', { maxLength: 7 })} />
              </div>
            </div>

            <div className='basis-56 flex flex-col gap-2 h-32 w-32'>
              <img className="rounded-3xl border bg-gray-300 border-gray-600 block" src={imgURL} alt="Image"/>
              <button className='btn btn-sm' onClick={() => setIsModalOpen(true)}>Change</button>
            </div>
          </div>

          <div className='flex flex-col p-2'>
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea defaultValue={data.bio} className="textarea h-24 textarea-bordered" {...register('bio')}></textarea>
          </div>

          { isResourcesLoading && <Shimmer/> }
          { isResourcesError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
          {
            resourceData && resourceData.length && (
              <div className='mt-4'>
                <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
                Resources
                </h1>
                <div className="flex flex-col sm:w-96">
                  {
                    resourceData.map((resource, index) => (
                      <div key={resource.id} className="alert-sm alert-info rounded m-1">
                        <div className="flex justify-between items-center">
                          <label className='text-sm font-semibold'>{resource.name}</label>
                          <input
                            type="checkbox"
                            className="toggle toggle-primary"
                            value={resource.id}
                            defaultChecked={personalResources.includes(resource.id)}
                            {...register(`personal_resources.${index}`)}/>

                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }

          <div className='flex justify-center my-4'>
            <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      )}
    </Container>)
}

export default EditProfile;