import Link from "next/link";
import { useQuery } from "react-query";
import Container from "../../components/ui/Container";
import useAxios from "../../hooks/useAxios";
import Shimmer from '../../components/ui/Shimmer';

export const getServerSideProps = async (ctx) => {
  // TODO: Get the data from the server here using ctx.params.id
  // TODO: Then return the component Profile with the data
  return { props: { id: ctx.params.id } }
};

function RequestId({ id }) {
  const {isLoading, isError, data} = useQuery('request', () => useAxios({ url: `/request/${id}`, method: "get" }));
  console.log(data);

  function offerHelp() {
    // TODO: We need a user for this
    console.log("Hey now");
  }

  return (
    <Container title="Help For">
      { isLoading && <Shimmer/>}
      { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
      { data && (
        <div className="flex flex-col p-2 space-between">
          <h1 className="font-medium text-xl">{`${data.requester.first_name} ${data.requester.last_name}`}</h1>
          <div className="flex items-start">
            <Link href={`/profile/${data.requester.id}`}>
              <button className="btn btn-sm btn-primary">View Profile</button>
            </Link>
          </div>
          <div className="my-6">
            <h2 className="font-medium text-lg">{data.category.name}</h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-2">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Details
              </h2>
              <p className="text-sm">{data.request_details}</p>
            </div>
              {
                data.requested_resources && data.requested_resources.length > 0 && (
                <div className="p-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Resources
                  </h2>
                  <div className="flex flex-col gap-1 sm:w-96">
                    {
                      data.requested_resources.map(resource =>
                        <div className="alert-sm alert-info rounded">
                          <div className="flex-1">
                            <label className='text-sm font-semibold uppercase'>{resource.name}</label>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
                )
              }
            {

            }

            {
              data.time_sensitive && (
                <div className="p-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Time specified
                  </h2>
                  <div className="flex flex-col gap-1 sm:w-96">
                    <div className="alert-sm alert-success rounded">
                      <div className="flex-1">
                        <label className='text-sm font-semibold'>{new Date(data.start_time).toLocaleDateString()}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          <button onClick={offerHelp} className="btn btn-primary mt-10">Offer my help</button>
        </div>
      )}
    </Container>
  );
}

export default RequestId