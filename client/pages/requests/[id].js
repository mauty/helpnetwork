import Container from "../../components/ui/Container";

function RequestId() {
  return <Container title="Help For">
    <div className="flex flex-col p-2">
      <h1 className="font-medium text-xl">Betty Johnson</h1>
      <div className="flex items-start">
        <button className="btn btn-sm btn-primary">View Profile</button>
      </div>
    </div>
  </Container>
}

export default RequestId