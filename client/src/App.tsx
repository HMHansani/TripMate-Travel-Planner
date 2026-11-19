
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetails from './pages/DestinationDetails'
import MyTrips from './pages/MyTrips'
import CreateTrip from './pages/CreateTrip'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
