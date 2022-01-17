import NavBar from "../../components/NavBar"
import NewRequest from "../../components/NewRequest"
import Container from "../../components/ui/Container"
import Header from "../../components/Header"

function NewRequestPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <Header pageName="New Request Form" />
        <header className="h-20">New Request Form</header>
        <NewRequest />
        <NavBar />
      
    </div>
  )
}

export default NewRequestPage