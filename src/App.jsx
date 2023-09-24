import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser' // Import the UpdateUser component

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} /> {/* Use the UpdateUser component */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
