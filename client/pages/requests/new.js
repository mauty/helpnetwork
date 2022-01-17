import NavBar from "../../components/NavBar"
import NewRequest from "../../components/NewRequest"
import Container from "../../components/ui/Container"

function NewRequestPage() {
  return (
    <Container>
      <h2>New Request Form</h2>
      <NewRequest />
      <NavBar />
    </Container>
  )
}

export default NewRequestPage