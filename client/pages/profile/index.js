import { useContext } from 'react';
import { UserContext } from '../_app';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';

import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import ProfileView from '../../components/Profile/ProfileView';

export default function Profile() {
  const { currentUser } = useContext(UserContext);
  const { isLoading, isError, data } = useQuery('profile', () => useAxios({ url: `/profile/${currentUser.id}`, method: "get" }));

  if(isLoading) return <div className="p-2"><Shimmer/></div>;
  if(isError) return <div className="p-2"><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>;
  return <ProfileView data={data}/>
}
