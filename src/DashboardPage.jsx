import React from 'react';
import { Link } from 'react-router-dom';
import {
    Bell, LayoutDashboard, ClipboardList, Users, Settings, Filter,
    Briefcase, FileEdit, User, MapPin, MessageSquare, ChevronRight
} from 'lucide-react';

const dashCards = [
    {
        id: "+65 12345678",
        species: "Contained, ACRES to pickup",
        status: "green",
        caller: "Chen Wei",
        location: "221 Mauro Cti",
        issue: "Macaque distressed",
        image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&h=300&fit=crop",
        style: "full"
    },
    {
        id: "+65 90293531",
        species: "Pending",
        status: "yellow",
        caller: "Conia Shanma",
        location: "2611 Mory Address",
        issue: "Macaque distressed",
        image: "https://images.unsplash.com/photo-1533087355953-b4a5b408ed0e?w=400&h=400&fit=crop",
        style: "full"
    },
    {
        id: "+65 90293531",
        species: "Urgent",
        status: "red",
        caller: "Conia Shanma",
        location: "2611 Mory Address",
        issue: "Macaque distressed",
        image: "https://images.unsplash.com/photo-1533087355953-b4a5b408ed0e?w=400&h=400&fit=crop",
        style: "full"
    },
    {
        id: "+65 12345678",
        species: "Urgent",
        status: "red",
        caller: "Conia Shanma",
        location: "2611 Mory Address",
        issue: "Macaque distressed",
        image: "https://images.unsplash.com/photo-1533087355953-b4a5b408ed0e?w=400&h=400&fit=crop",
        style: "full"
    },
    {
        id: "+65 90293531",
        species: "Contained, ACRES to pickup",
        status: "green",
        caller: "Maria Lopez",
        location: "3332 Inscue Address",
        issue: "Macaque distressed",
        image: "https://images.unsplash.com/photo-1596781295245-5c1eb0acc91d?w=600&h=300&fit=crop",
        style: "full"
    },
    {
        id: "+65 12345678",
        species: "Sending to us",
        status: "green",
        caller: "Maria Lopez",
        location: "Long-tailed Macaque",
        issue: "Injured Bird",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop",
        style: "full"
    }
];

function DashboardPage() {
    return (
        <>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                <div className="page-title" style={{ marginBottom: 0 }}>Overview Dashboard</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Last updated: 10:30 AM</div>
            </div>

            <div className="summary-cards">
                <div className="summary-card">
                    <div className="summary-card-content">
                        <div className="summary-card-value">6</div>
                        <div className="summary-card-label">Active Cases</div>
                    </div>
                </div>

                <div className="summary-card" style={{ padding: '1rem' }}>
                    <div className="donut-chart">
                        <span className="donut-value">45%</span>
                        <span className="donut-label">Total Capacity</span>
                    </div>
                </div>

                <div className="summary-card">
                    <div className="summary-card-content">
                        <div className="summary-card-value">3</div>
                        <div className="summary-card-label">Cases Pending Input</div>
                    </div>
                </div>
            </div>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}> Active Cases</h2>
            <div className="dashboard-cases-grid">
                {dashCards.map((card, idx) => (
                    <Link to="/case" key={idx} className={`dash-case-card ${card.style}`}>
                        <div className="dash-case-card-bg" style={{ backgroundImage: `url(${card.image})` }}></div>
                        <div className="dash-case-card-overlay"></div>
                        <div className="dash-case-card-content">
                            <div className="dash-card-header">
                                <span className="dash-card-id">{card.id}</span>
                                <div className="dash-card-species">
                                    {card.species} <span className={`status-dot ${card.status}`}></span>
                                </div>
                            </div>
                            <div className="dash-card-body">
                                <div className="dash-info-row">
                                    <User size={14} className="dash-info-icon" />
                                    <span className="dash-info-label">Caller</span>
                                    <span className="dash-info-value">{card.caller}</span>
                                </div>
                                <div className="dash-info-row">
                                    <MapPin size={14} className="dash-info-icon" />
                                    <span className="dash-info-label">Location</span>
                                    <span className="dash-info-value">{card.location}</span>
                                </div>
                                <div className="dash-info-row">
                                    <MessageSquare size={14} className="dash-info-icon" />
                                    <span className="dash-info-label">Issue</span>
                                    <span className="dash-info-value">{card.issue}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link to="/cases" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', fontWeight: 500 }}>
                    View all cases <ChevronRight size={16} />
                </Link>
            </div>
        </>
    );
}

export default DashboardPage;
