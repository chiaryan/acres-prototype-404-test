import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Shield, MonitorSmartphone, Plus } from 'lucide-react';

const mockUsers = [
    { id: 1, name: "Alice Ong", email: "alice.o@example.com", role: "Admin", status: "Active", lastLogin: "10 mins ago", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Ben Davies", email: "ben.d@example.com", role: "Call Staffer", status: "Active", lastLogin: "2 hours ago", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Chen Wei", email: "chen.w@example.com", role: "Volunteer", status: "Expired", lastLogin: "2 days ago", avatar: "https://i.pravatar.cc/100?img=11" },
    { id: 4, name: "Diana Tan", email: "diana.t@example.com", role: "Volunteer Coordinator", status: "Active", lastLogin: "5 mins ago", avatar: "https://i.pravatar.cc/100?img=4" },
];

const mockSessions = [
    { id: 101, userName: "Alice Ong", device: "MacBook Pro - Chrome", ip: "192.168.1.45", loginTime: "10 mins ago", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 102, userName: "Ben Davies", device: "Windows PC - Edge", ip: "10.0.0.12", loginTime: "2 hours ago", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 103, userName: "Diana Tan", device: "iPhone 14 - Safari", ip: "172.16.0.5", loginTime: "5 mins ago", avatar: "https://i.pravatar.cc/100?img=4" },
];

export default function UserManagementPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const categoryQuery = searchParams.get('category');
    const activeTab = categoryQuery === 'Active Sessions' ? 'sessions' : 'directory';

    const [searchQuery, setSearchQuery] = useState('');

    const handleTabChange = (tab) => {
        if (tab === 'directory') {
            navigate('/users?category=User+Directory');
        } else {
            navigate('/users?category=Active+Sessions');
        }
    };

    const filteredUsers = mockUsers.filter(u =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="user-management-page">
            <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div className="page-title">User Management</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                        {/* Manage roles, platform access, and monitor active sessions. */}
                    </div>
                </div>
                {activeTab === 'directory' && (
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={16} /> New User
                    </button>
                )}
            </div>

            {activeTab === 'directory' && (
                <div className="card">
                    <div style={{ marginBottom: '1rem', maxWidth: '300px', position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input className="form-input" placeholder="Search users..." style={{ paddingLeft: '2.5rem', width: '100%' }} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </div>

                    <div className="table-responsive desktop-only">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Last Login Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(user => (
                                    <tr key={user.id}>
                                        <td style={{ padding: '0.75rem 1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <img src={user.avatar} style={{ width: 36, height: 36, borderRadius: '50%' }} alt={user.name} />
                                                <span style={{ fontWeight: 500 }}>{user.name}</span>
                                            </div>
                                        </td>
                                        <td style={{ color: 'var(--text-muted)', padding: '0.75rem 1rem' }}>{user.email}</td>
                                        <td>
                                            <span className={`badge ${user.role === 'Admin' ? 'blue' : user.role === 'Call Staffer' ? 'green' : user.role === 'Volunteer Coordinator' ? 'orange' : 'gray'}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ display: 'flex', padding: '0.75rem 1rem', alignItems: 'center', gap: '0.4rem', color: user.status === 'Active' ? '#166534' : '#991b1b', fontSize: '0.9rem' }}>
                                                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: user.status === 'Active' ? '#22c55e' : '#ef4444' }}></span>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td style={{ color: 'var(--text-muted)', padding: '0.75rem 1rem' }}>{user.lastLogin}</td>
                                        <td>
                                            <Link to="/user" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}>Edit User</Link>
                                        </td>
                                    </tr>
                                ))}
                                {filteredUsers.length === 0 && (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                            No users found for this search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Users List */}
                    <div className="mobile-users-list mobile-only">
                        {filteredUsers.map(user => (
                            <div key={user.id} className="mc-card">
                                <div className="mc-field-line" style={{ justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img src={user.avatar} style={{ width: 36, height: 36, borderRadius: '50%' }} alt={user.name} />
                                        <span style={{ fontWeight: 600, fontSize: '1rem' }}>{user.name}</span>
                                    </div>
                                    <span className={`badge ${user.role === 'Admin' ? 'blue' : user.role === 'Call Staffer' ? 'green' : user.role === 'Volunteer Coordinator' ? 'orange' : 'gray'} mc-badge`}>
                                        {user.role}
                                    </span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '70px' }}>Email</span>
                                    <span className="mc-value">{user.email}</span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '70px' }}>Status</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: user.status === 'Active' ? '#166534' : '#991b1b', fontSize: '0.9rem' }}>
                                        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: user.status === 'Active' ? '#22c55e' : '#ef4444' }}></span>
                                        {user.status}
                                    </span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '70px' }}>Last Login</span>
                                    <span className="mc-value">{user.lastLogin}</span>
                                </div>
                                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                                    <Link to="/user" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>Edit User</Link>
                                </div>
                            </div>
                        ))}
                        {filteredUsers.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                No users found for this search.
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'sessions' && (
                <div className="card">
                    <div className="table-responsive desktop-only">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Device</th>
                                    <th hidden>IP Address</th>
                                    <th>Login Time</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockSessions.map(session => (
                                    <tr key={session.id}>
                                        <td style={{ padding: '0.75rem 1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <img src={session.avatar} style={{ width: 32, height: 32, borderRadius: '50%' }} alt={session.userName} />
                                                <span style={{ fontWeight: 500 }}>{session.userName}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '0.75rem 1rem' }}>{session.device}</td>
                                        <td hidden style={{ color: 'var(--text-muted)', padding: '0.75rem 1rem' }}>{session.ip}</td>
                                        <td style={{ color: 'var(--text-muted)', padding: '0.75rem 1rem' }}>{session.loginTime}</td>
                                        <td style={{ textAlign: 'right', padding: '0.75rem 1rem' }}>
                                            <button className="btn btn-outline" style={{ color: '#ef4444', borderColor: '#ef4444', padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}>Revoke</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Sessions List */}
                    <div className="mobile-sessions-list mobile-only">
                        {mockSessions.map(session => (
                            <div key={session.id} className="mc-card">
                                <div className="mc-field-line" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                                    <img src={session.avatar} style={{ width: 36, height: 36, borderRadius: '50%' }} alt={session.userName} />
                                    <span style={{ fontWeight: 600, fontSize: '1rem' }}>{session.userName}</span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '85px' }}>Device</span>
                                    <span className="mc-value">{session.device}</span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '85px' }}>Login Time</span>
                                    <span className="mc-value">{session.loginTime}</span>
                                </div>
                                <div className="mc-field-line">
                                    <span className="mc-label" style={{ minWidth: '85px' }}>IP Address</span>
                                    <span className="mc-value">{session.ip}</span>
                                </div>
                                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                                    <button className="btn btn-outline" style={{ color: '#ef4444', borderColor: '#ef4444', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>Revoke</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
