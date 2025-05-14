import './App.css'
import Users from './components/Users'
const userspromise = fetch('http://localhost:5000/users').then(res=>res.json());


function App() {
  

  return (
    <>
      
      <h1 className='text-center font-bold'>User Management Application</h1>
      <Users usersPromise={userspromise}></Users>
    </>
  )
}

export default App
