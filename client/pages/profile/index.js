import Container from '../../components/ui/Container';

export default function Profile() {
  const { isLoading, isError, data } = useQuery('profile', () => useAxios({ url: `/profile/${id}`, method: "get" }));

  if(isLoading) return <div className="p-2"><Shimmer/></div>;
  if(isError) return <div className="p-2"><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>;
  return <ProfileView data={data}/>
}
