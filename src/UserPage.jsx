import React from 'react';
import { ArrowLeft, Save, ShieldAlert, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserPage() {
    return (
        <div className="user-profile-page">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/users" className="btn btn-outline btn-icon" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowLeft size={18} />
                </Link>
                <div>
                    <div className="page-title">User Profile: Alice Ong</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                        Manage individual user credentials and access permissions.
                    </div>
                </div>
            </div>

            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <img src="https://i.pravatar.cc/100?img=1" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-dark)' }}>Alice Ong</h2>
                        <span className="badge blue" style={{ marginTop: '0.5rem', display: 'inline-block' }}>Admin</span>
                    </div>
                </div>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
                    <User size={18} /> Profile Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div className="form-group mb-0">
                            <label className="form-label">Full Name</label>
                            <input className="form-input" defaultValue="Alice Ong" />
                        </div>
                        <div className="form-group mb-0">
                            <label className="form-label">Email Address</label>
                            <input className="form-input" type="email" defaultValue="alice.o@example.com" />
                        </div>
                    </div>
                </div>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
                    <ShieldAlert size={18} /> Access & Permissions
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div className="form-group mb-0">
                            <label className="form-label">Assigned Role</label>
                            <select className="form-input" defaultValue="Admin">
                                <option value="Admin">Admin</option>
                                <option value="Volunteer Coordinator">Volunteer Coordinator</option>
                                <option value="Call Staffer">Call Staffer</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                        </div>
                        <div className="form-group mb-0">
                            <label className="form-label">Access Expiry Date</label>
                            <input className="form-input" type="date" defaultValue="2027-12-31" />
                        </div>
                    </div>
                    <div className="form-group mb-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>Account Status</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Enable or disable this user's platform access manually.</div>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <Link to="/users" className="btn btn-outline" style={{ textDecoration: 'none' }}>Cancel</Link>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
