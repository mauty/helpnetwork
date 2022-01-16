import Profile from './index';

export const getServerSideProps = async (ctx) => {
  // TODO: Get the data from the server here using ctx.params.id
  // TODO: Then return the component Profile with the data index.js
  console.log(ctx.params.id);
};

function ProfileId() {
  return <div>ProfileId</div>
}

export default ProfileId