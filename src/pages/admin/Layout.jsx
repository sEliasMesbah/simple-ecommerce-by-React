import React from 'react'
import AdminHeader from '../../components/Admin/AdminHeader';
import NewProduct from './products/New';
// import "./app.css"

function LayoutAdmin() {
  return <>
  <div className="admin-wrapper">
    <AdminHeader /></div>
    <NewProduct/>
  </>

  
}

export default LayoutAdmin;