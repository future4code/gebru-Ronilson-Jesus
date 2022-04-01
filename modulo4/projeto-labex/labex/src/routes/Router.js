import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage/>} />
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/trips/register" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/admin/trips/list" element={<AdminHomePage/>} />
                <Route path="/admin/trips/create" element={<CreateTripPage/>} />
                <Route path="/admin/trips" element={<TripDetailsPage/>} />
            </Routes>


        </BrowserRouter>
    )
}
export default Router