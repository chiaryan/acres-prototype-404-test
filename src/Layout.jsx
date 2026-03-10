import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    Bell, LayoutDashboard, ClipboardList, Users, Settings, Filter, Menu, X, BookOpen, Shield, MonitorSmartphone,
    Image, Volume2, FileText, ChevronDown
} from 'lucide-react';

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname.startsWith(path);

    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="app-layout">
            {/* Top Navbar */}
            <header className="top-navbar">
                <div className="nav-left">
                    <button className="menu-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu size={24} />
                    </button>
                    <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="4" fill="white" />
                            <path d="M12 4L4 20H8L9.5 16H14.5L16 20H20L12 4Z" fill="#2e5374" />
                        </svg>
                        <span className="logo-text">ACRES</span>
                        <ChevronDown size={18} className="mobile-only" style={{ marginLeft: '4px' }} />
                    </div>
                    <nav className="nav-links desktop-only">
                        <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Dashboard</Link>
                        <Link to="/cases" className={`nav-link ${(isActive('/case') || isActive('/cases')) && !isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Cases</Link>
                        <Link to="/voln-home" className={`nav-link ${(isActive('/voln-home')) && !isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Volunteer Home Page</Link>
                        <Link to="/voln-allocation" className={`nav-link ${(isActive('/voln-allocation')) && !isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Volunteer Allocation</Link>
                        <Link to="/resources" className={`nav-link ${isActive('/resources') ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Resources</Link>
                        <Link to="/users" className={`nav-link ${isActive('/user') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>User Management</Link>
                    </nav>
                </div>
                <div className="nav-right">
                    <div className="user-profile desktop-only">
                        <img src="https://i.pravatar.cc/100?img=5" alt="Test User" className="user-avatar" />
                        <span>Test User</span>
                    </div>
                    {/* On mobile, maybe just show avatar */}
                    <img src="https://i.pravatar.cc/100?img=5" alt="Test User" className="user-avatar mobile-only" style={{ display: 'none' }} />
                </div>

                {mobileNavOpen && (
                    <div className="mobile-nav-dropdown mobile-only">
                        <Link to="/dashboard" className={`mobile-nav-link ${isActive('/dashboard') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Dashboard</Link>
                        <Link to="/cases" className={`mobile-nav-link ${(isActive('/case') || isActive('/cases')) && !isActive('/dashboard') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Cases</Link>
                        <Link to="/voln-home" className={`mobile-nav-link ${(isActive('/voln-home')) && !isActive('/dashboard') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Volunteer Home Page</Link>
                        <Link to="/voln-allocation" className={`mobile-nav-link ${(isActive('/voln-allocation')) && !isActive('/dashboard') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Volunteer Allocation</Link>
                        <Link to="/resources" className={`mobile-nav-link ${isActive('/resources') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Resources</Link>
                        <Link to="/users" className={`mobile-nav-link ${isActive('/user') ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>User Management</Link>
                    </div>
                )}
            </header>

            {/* Main Body */}
            <div className="main-body relative">
                {/* Sidebar Overlay for mobile */}
                {sidebarOpen && (
                    <div className="sidebar-overlay" onClick={closeSidebar}></div>
                )}

                {/* Sidebar */}
                <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    {isActive('/resources') ? (
                        <>
                            <Link to="/resources?category=Identification+Charts" className={`nav-item ${location.search.includes('Identification') || !location.search ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <Image size={18} /> Identification Charts
                            </Link>
                            <Link to="/resources?category=Animal+Vocalisations:+Audio+clips" className={`nav-item ${location.search.includes('Animal') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <Volume2 size={18} /> Animal Vocalisations
                            </Link>
                            <Link to="/resources?category=Field+SOP" className={`nav-item ${location.search.includes('Field') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <FileText size={18} /> Field SOP
                            </Link>
                        </>
                    ) : (isActive('/voln-home') || isActive('/voln-case')) ? (
                        <>
                            <Link to="/voln-home" className={`nav-item ${isActive('/voln-home') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <LayoutDashboard size={18} /> My Cases
                            </Link>
                        </>
                    ) : (isActive('/voln-allocation') || isActive('/voln-case')) ? (
                        <>
                            <Link to="/voln-allocation" className="nav-item active" style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <Users size={18} /> Volunteer Allocation
                            </Link>
                        </>
                    ) : (isActive('/users')) ? (
                        <>
                            <Link to="/users?category=User+Directory" className={`nav-item ${location.search.includes('User') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <Shield size={18} /> User Directory
                            </Link>
                            <Link to="/users?category=Active+Sessions" className={`nav-item ${location.search.includes('Active') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <MonitorSmartphone size={18} /> Active Sessions
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <LayoutDashboard size={18} /> Dashboard
                            </Link>
                            <Link to="/cases" className={`nav-item ${(isActive('/case') || isActive('/cases')) && !isActive('/dashboard') ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={closeSidebar}>
                                <ClipboardList size={18} /> Cases
                            </Link>
                        </>
                    )}
                </aside>

                {/* Main Content Area */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
