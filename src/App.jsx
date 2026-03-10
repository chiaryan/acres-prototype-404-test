import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import CasePage from './CasePage';
import DashboardPage from './DashboardPage';
import CasesListPage from './CasesListPage';
import ResourcesPage from './ResourcesPage';
import VolnAllocationPage from './VolnAllocationPage';
import VolnHomePage from './VolnHomePage';
import VolnCasePage from './VolnCasePage';
import UserManagementPage from './UserManagementPage';
import UserPage from './UserPage';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/case" element={<CasePage />} />
                    <Route path="/cases" element={<CasesListPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/voln-allocation" element={<VolnAllocationPage />} />
                    <Route path="/voln-home" element={<VolnHomePage />} />
                    <Route path="/voln-case" element={<VolnCasePage />} />
                    <Route path="/users" element={<UserManagementPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
