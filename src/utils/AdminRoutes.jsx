import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { isAdmin } from '../utils/auth';
import LayoutAdmin from '../pages/admin/Layout';
// import Dashboard from '../pages/admin/Dashboard';
// import UsersList from '../pages/admin/UsersList';

const AdminRoutes = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (isAdminRoute && !isAdmin()) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Routes>
      <Route path="/admin" element={<LayoutAdmin />}>
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UsersList />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
