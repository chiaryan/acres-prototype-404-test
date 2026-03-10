import React from 'react';
import { Link } from 'react-router-dom';
import {
    Bell, LayoutDashboard, ClipboardList, Users, Settings, Filter, ShieldAlert,
    MapPin, Map, Edit, Upload, Archive, Download, Plus, FileText, ChevronDown,
    Delete,
    TrashIcon
} from 'lucide-react';

function CasePage() {
    return (
        <>
            {/* Header Section */}
            <div className="page-header">
                <div className="page-title-row">
                    <div className="page-title">Case View: #231026-04 | Macaque in distress</div>
                    <div className="action-buttons">
                        <button className="btn btn-primary">
                            <Edit size={16} /> Edit
                        </button>
                        <button className="btn btn-outline">
                            <TrashIcon size={16} /> Delete
                        </button>
                    </div>
                </div>
                <div className="badges-row">
                    <span className="badge blue">Case ID</span>
                    <span className="badge gray">Species: Macaque</span>
                    <span className="badge green">Status: Released</span>
                </div>
            </div>

            <div className="content-grid">
                {/* Column 1 */}
                <div className="grid-col">
                    <div className="card">
                        <div className="card-title">Caller & Initial Info</div>

                        <div className="form-group">
                            <label className="form-label">Caller Name</label>
                            <input className="form-input" defaultValue="Liam Ng" />
                        </div>

                        <div className="form-group">
                            <div className="form-label-row">
                                <label className="form-label">Caller's Number</label>
                                <span className="form-hint">30-day retention</span>
                            </div>
                            <input className="form-input" defaultValue="Editable number" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Time of Call</label>
                            <input className="form-input" defaultValue="10:15 AM" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Caller Email</label>
                            <input className="form-input" defaultValue="" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Priority</label>
                            <span className="badge orange mb-0" style={{ width: 'fit-content' }}>Urgent</span>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Case Info</label>
                            <textarea className="form-input" defaultValue="Report of a juvenile macaque caught in fencing at location. Caller says it seems injured." />
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="grid-col">
                    <div className="card">
                        <div className="card-title">Field Data</div>

                        <div className="form-group">
                            <label className="form-label">Location of Call</label>
                            <input className="form-input" defaultValue="Address" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">GPS Location of Call</label>
                            <div className="form-input-with-icon">
                                <input className="form-input" defaultValue="-20.032.463" />
                                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem', borderRadius: '6px', border: '1px solid #e2e8f0', marginLeft: '0.5rem', cursor: 'pointer', backgroundColor: '#f8fafc', color: '#4b5563' }}>
                                    <Map size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Location of Encounter</label>
                            <input className="form-input" defaultValue="Address" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">GPS Location of Encounter</label>
                            <div className="form-input-with-icon">
                                <input className="form-input" defaultValue="-20.065.4363" />
                                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem', borderRadius: '6px', border: '1px solid #e2e8f0', marginLeft: '0.5rem', cursor: 'pointer', backgroundColor: '#f8fafc', color: '#4b5563' }}>
                                    <Map size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Taxonomy</label>
                            <input className="form-input" defaultValue="Mammal" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Species</label>
                            <input className="form-input" defaultValue="Long-tailed Macaque" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Date of Rescue</label>
                            <input className="form-input" defaultValue="Editable Inscue" />
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="grid-col">
                    <div className="card">
                        <div className="card-title">Assignments & Progress</div>

                        <div className="form-group">
                            <label className="form-label">Assigned Volunteers</label>
                            <div className="volunteer-list">
                                <div className="volunteer-item">
                                    <img src="https://i.pravatar.cc/100?img=11" alt="Chen Wei" className="volunteer-avatar" />
                                    <span className="text-sm font-medium">Chen Wei</span>
                                </div>
                                <div className="volunteer-item">
                                    <img src="https://i.pravatar.cc/100?img=9" alt="Maria Lopez" className="volunteer-avatar" />
                                    <span className="text-sm font-medium">Maria Lopez</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Driver Name</label>
                            <input className="form-input" defaultValue="David Lim" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Action Taken</label>
                            <span className="badge green mb-0" style={{ width: 'fit-content' }}>Rescued</span>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Action Conclusion</label>
                            <textarea className="form-input" defaultValue="Fencing removed, animal inspected for injuries, superficial cuts cleaned, monitored. Deemed fit for release." style={{ minHeight: '90px' }} />
                        </div>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="grid-col">
                    {/* Outcomes & Docs */}
                    <div className="card">
                        <div className="card-title">Outcomes & Docs</div>

                        <div className="outcome-row">
                            <span className="outcome-label">Completed At</span>
                            <div className="outcome-value">
                                <span>12/04/2023</span>
                                <span className="form-hint" style={{ fontSize: '0.75rem', color: '#64748b' }}>12/03 12:30 AM</span>
                            </div>
                        </div>

                        <div className="outcome-row">
                            <span className="outcome-label">Released At</span>
                            <div className="outcome-value">
                                <span>12/04/2023</span>
                                <span className="form-hint" style={{ fontSize: '0.75rem', color: '#64748b' }}>12/03 17:30 AM</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Status</label>
                            <div className="form-input-with-icon" style={{ position: 'relative' }}>
                                <div className="form-input" style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0', color: '#166534', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>Released</span>
                                    <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="outcome-row" style={{ marginTop: '0.75rem' }}>
                            <span className="outcome-label">Created By</span>
                            <span className="text-blue text-sm" style={{ textDecoration: 'underline' }}>Jane Doe</span>
                        </div>

                        <div className="form-group mt-2">
                            <label className="form-label">Takeover Form</label>
                            <div className="takeover-card">
                                <div className="takeover-icon">
                                    <FileText size={20} />
                                </div>
                                <div className="takeover-details">
                                    <span className="takeover-filename">takeover_form_231026-04.pdf</span>
                                </div>
                                <div className="takeover-actions">
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#0369a1' }}>View</span>
                                    <Download size={14} color="#0369a1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="card">
                        <div className="card-title">Images</div>

                        <div className="image-grid">
                            <div className="image-cell"><img src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=300&h=300&fit=crop" alt="Macaque image 1" /></div>
                            <div className="image-cell"><img src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?w=300&h=300&fit=crop" alt="Macaque image 2" /></div>
                            <div className="image-cell"><img src="https://images.unsplash.com/photo-1521404094498-38bb8b368fe0?w=300&h=300&fit=crop" alt="Macaque image 3" /></div>
                            <div className="image-cell"><img src="https://images.unsplash.com/photo-1628174786310-86b3cc61eddf?w=300&h=300&fit=crop" alt="Macaque image 4" /></div>
                            <div className="image-cell"><img src="https://images.unsplash.com/photo-1579781846067-27bbaa5dd416?w=300&h=300&fit=crop" alt="Macaque image 5" /></div>

                            <div className="add-image-btn">
                                <Plus size={20} />
                                Add Images
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CasePage;
