import { useContext } from 'react';
import { UserContext } from '../_app';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';

import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import ProfileView from '../../components/Profile/ProfileView';

export default function Profile() {
  const user = useContext(UserContext);
  const { isLoading, isError, data } = useQuery('profile', () => useAxios({ url: `/profile/${user.id}`, method: "get" }));
  console.log(data);

  if(isLoading) return <div className="p-2"><Shimmer/></div>;
  if(isError) return <div className="p-2"><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>;
  return <ProfileView data={data}/>
}
