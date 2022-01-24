import Head from "next/head";
import Shimmer from "../../components/ui/Shimmer";
import ProfileView from "../../components/Profile/ProfileView";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "react-query";
import ErrorMessage from "../../components/ui/ErrorMessage";
import Header from "../../components/Header";

export const getServerSideProps = async (ctx) => {
  // TODO: Get the data from the server here using ctx.params.id
  // TODO: Then return the component Profile with the data index.js
  return { props: { id: ctx.params.id } }
};

function ProfileId({ id }) {
  const { isLoading, isError, data } = useQuery('profile', () => useAxios({ url: `/profile/${id}`, method: "get" }));

  if(isLoading) return <div className="p-2"><Shimmer/></div>;
  if(isError) return <div className="p-2"><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>;
  return (
    <>
      <Head>
        <title>helpnetwork | profile</title>
      </Head>
      <Header pageName="Profile" />
      <ProfileView data={data}/>
    </>
  )
}

export default ProfileId