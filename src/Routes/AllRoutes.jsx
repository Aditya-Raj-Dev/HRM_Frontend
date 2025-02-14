import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Authentication from "../Authentication/Authentication"
import Employee from "../Pages/Employee"
import Attendance from "../Pages/Attendance"
import Leave from "../Pages/Leave"
import Payroll from "../Pages/Payroll"
import NotAuthorized from "../Components/NotAuthorized"

const AllRoutes = () => {
  const role=JSON.parse(sessionStorage.getItem("role"))
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Authentication>
            <Home />
          </Authentication>
        }
      />

      <Route
        path="/employee"
        element={
          <Authentication>
            {role==="HR"?<Employee />:<Home/>}
          </Authentication>
        }
      />
      <Route
        path="/attendance"
        element={
          <Authentication>
            <Attendance />
          </Authentication>
        }
      /> <Route
        path="/leave"
        element={
          <Authentication>
            <Leave />
          </Authentication>
        }
      />
      <Route
        path="/payroll"
        element={
          <Authentication>
            {role==="HR"?<Payroll />:<NotAuthorized/>}
          </Authentication>
        }
      />

    </Routes>
  )
}
export default AllRoutes 