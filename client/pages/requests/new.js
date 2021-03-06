import NavBar from "../../components/NavBar"
import NewRequestForm from "../../components/NewRequest/NewRequestForm"
import Container from "../../components/ui/Container"
import Header from "../../components/Header"

import { FormProvider } from "../../contexts/FormContext";

function NewRequestPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <Header pageName="New Request Form" />
        <FormProvider>
          <NavBar currentNav={"new"}>
            <Container>
              <NewRequestForm />
            </Container>
          </NavBar>
        </FormProvider>
    </div>
  )
}

export default NewRequestPage