import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <UserContextProvider>
   <h1 >Context Api</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
 
   </>
  )
}

export default App
