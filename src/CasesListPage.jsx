import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Bell, LayoutDashboard, ClipboardList, Users, Settings, Filter,
    Download, Map, Search, Calendar, ChevronDown,
    Plus,
    PlusIcon
} from 'lucide-react';

const baseMockCases = [
    {
        id: "231026-043",
        callerName: "Chen Wei",
        callerNumber: "+65 12345678",
        dateOfRescue: "2023-10-26",
        location: "221 Mauro Cti",
        species: "Long-tailed Macaque",
        taxonomy: "Mammal",
        priority: "Urgent",
        priorityColor: "orange",
        caseInfo: "Macaque distressed in residential area.",
        additionalInfo: "Caller reported it has been there for 2 hours.",
        status: "Pending"
    },
    {
        id: "231026-048",
        callerName: "Conia Shanma",
        callerNumber: "+65 90293531",
        dateOfRescue: "2023-10-26",
        location: "2611 Mory Address",
        species: "Monitor Lizard",
        taxonomy: "Reptile",
        priority: "Get Updates",
        priorityColor: "blue",
        caseInfo: "Lizard seen near drains.",
        additionalInfo: "Requested a callback before going.",
        status: "Released"
    },
    {
        id: "231026-049",
        callerName: "Maria Lopez",
        callerNumber: "+65 90293531",
        dateOfRescue: "2023-10-25",
        location: "3332 Inscue Address",
        species: "Python",
        taxonomy: "Reptile",
        priority: "Urgent",
        priorityColor: "orange",
        caseInfo: "Python in the bathroom.",
        additionalInfo: "Contained in the bathroom securely.",
        status: "Euthanised"
    },
    {
        id: "231026-040",
        callerName: "John Doe",
        callerNumber: "+65 12345678",
        dateOfRescue: "2023-10-25",
        location: "Long-tailed Macaque",
        species: "Unknown Bird",
        taxonomy: "Bird",
        priority: "Sending to us",
        priorityColor: "green",
        caseInfo: "Injured bird found on pavement.",
        additionalInfo: "Caller is bringing it to the facility.",
        status: "Mandai"
    }
];

const mockCases = Array.from({ length: 45 }).map((_, i) => ({
    ...baseMockCases[i % baseMockCases.length],
    id: `231026-${String(40 + i).padStart(3, '0')}`,
}));

function CasesListPage() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const totalPages = Math.ceil(mockCases.length / ITEMS_PER_PAGE);
    const currentCases = mockCases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleRowClick = () => {
        navigate('/case');
    };

    return (
        <>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexDirection: 'column', gap: '1rem' }}>
                <div className="page-title-row" style={{ width: '100%', marginBottom: 0 }}>
                    <div className="page-title">All Cases (Historical Records)</div>
                    <div className="action-buttons">
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <PlusIcon size={16} /> New Case
                        </button>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="filters-bar" style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="date" className="form-input" style={{ width: '100%', minWidth: 0 }} />
                        <span style={{ color: 'var(--text-muted)' }}>to</span>
                        <input type="date" className="form-input" style={{ width: '100%', minWidth: 0 }} />
                    </div>

                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 0.5rem' }}></div>

                    <div className="filter-group" style={{ display: 'flex', gap: '0.5rem' }}>
                        <div className="form-input-with-icon" style={{ position: 'relative' }}>
                            <select className="form-input" style={{ paddingRight: '2rem', appearance: 'none', width: '160px', cursor: 'pointer' }}>
                                <option value="">Status (All)</option>
                                <option value="Released">Released</option>
                                <option value="Euthanised">Euthanised</option>
                                <option value="Mandai">Mandai</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: '0.75rem', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                        </div>

                        <div className="form-input-with-icon" style={{ position: 'relative' }}>
                            <select className="form-input" style={{ paddingRight: '2rem', appearance: 'none', width: '200px', cursor: 'pointer' }}>
                                <option value="">Species/Taxonomy (All)</option>
                                <option value="Mammal">Mammal</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Bird">Bird</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: '0.75rem', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                        </div>

                        <div className="form-input-with-icon" style={{ position: 'relative' }}>
                            <select className="form-input" style={{ paddingRight: '2rem', appearance: 'none', width: '150px', cursor: 'pointer' }}>
                                <option value="">Priority (All)</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Get Updates">Get Updates</option>
                                <option value="Contained">Contained</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: '0.75rem', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                        </div>
                    </div>

                    <div className="filter-group" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <div className="form-input-with-icon" style={{ position: 'relative', width: '250px' }}>
                            <Search size={16} style={{ position: 'absolute', left: '0.75rem', color: 'var(--text-muted)' }} />
                            <input className="form-input" placeholder="Search cases..." style={{ paddingLeft: '2.5rem' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Container - Desktop */}
            <div className="table-container desktop-only" style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
                <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid var(--border-color)' }}>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Case ID</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Caller Name</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Caller's Number</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Date of Rescue</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Location of Call</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Taxonomy</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Species</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Priority</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Case Info</th>
                            <th style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>Additional Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCases.map((caseItem, idx) => (
                            <tr
                                key={idx}
                                onClick={handleRowClick}
                                style={{ borderBottom: '1px solid var(--border-color)', cursor: 'pointer', transition: 'background-color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{caseItem.id}</td>
                                <td style={{ padding: '0.75rem 1rem' }}>{caseItem.callerName}</td>
                                <td style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap' }}>{caseItem.callerNumber}</td>
                                <td style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap' }}>{caseItem.dateOfRescue}</td>
                                <td style={{ padding: '0.75rem 1rem', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={caseItem.location}>{caseItem.location}</td>
                                <td style={{ padding: '0.75rem 1rem' }}>{caseItem.taxonomy}</td>
                                <td style={{ padding: '0.75rem 1rem' }}>{caseItem.species}</td>
                                <td style={{ padding: '0.75rem 1rem' }}>
                                    <span className={`badge ${caseItem.priorityColor}`}>{caseItem.priority}</span>
                                </td>
                                <td style={{ padding: '0.75rem 1rem', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={caseItem.caseInfo}>{caseItem.caseInfo}</td>
                                <td style={{ padding: '0.75rem 1rem', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={caseItem.additionalInfo}>{caseItem.additionalInfo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards Container */}
            <div className="mobile-cases-list mobile-only">
                {currentCases.map((caseItem, idx) => {
                    const dateObj = new Date(caseItem.dateOfRescue);
                    const dayMonth = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

                    return (
                        <div key={idx} className="mc-card" onClick={handleRowClick}>
                            <div className="mc-field-line">
                                <span className="mc-label">Caller</span>
                                <span className="mc-value">{caseItem.callerName}</span>
                                <span className="mc-divider">|</span>
                                <span className="mc-value">{caseItem.callerNumber}</span>
                            </div>
                            <div className="mc-field-line">
                                <span className="mc-label">Date</span>
                                <span className="mc-value" style={{ minWidth: '45px' }}>{dayMonth}</span>
                                <span className="mc-label" style={{ marginLeft: '0.8rem' }}>Location</span>
                                <span className="mc-value">{caseItem.location}</span>
                            </div>
                            <div className="mc-field-line issue-container">
                                <span className="mc-label">Issue</span>
                                <p className="mc-issue-text">{caseItem.caseInfo}</p>
                            </div>
                            <div className="mc-field-line" style={{ marginTop: '0.4rem', marginBottom: 0 }}>
                                <span className="mc-label">Priority</span>
                                <span className={`badge ${caseItem.priorityColor} mc-badge`}>{caseItem.priority}</span>
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* Pagination UI */}
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, mockCases.length)} of {mockCases.length} cases
                </span>
                <div className="pagination-controls" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <button
                        className="btn btn-outline"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
                    >
                        Previous
                    </button>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)', margin: '0 0.5rem' }}>
                        Page <span style={{ fontWeight: 600 }}>{currentPage}</span> of {totalPages}
                    </span>
                    <button
                        className="btn btn-outline"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Export Actions below table */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem', padding: '0 0.5rem' }}>
                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Map size={16} /> Export KMZ
                </button>
                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Download size={16} /> Export CSV
                </button>
            </div>
        </>
    );
}

export default CasesListPage;
