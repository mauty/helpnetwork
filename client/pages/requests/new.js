import NavBar from "../../components/NavBar"
import NewRequestForm from "../../components/NewRequest/NewRequestForm"
import Container from "../../components/ui/Container"
import Header from "../../components/Header"

function NewRequestPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <Header pageName="New Request Form" />
        <NewRequestForm />
        <NavBar />
      
    </div>
  )
}

export default NewRequestPage