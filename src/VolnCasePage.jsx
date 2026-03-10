import { Download, Plus, FileText, ChevronDown } from 'lucide-react';

function VolnCasePage() {
    return (
        <>
            {/* Header Section */}
            <div className="page-header">
                <div className="page-title-row">
                    <div className="page-title">Case View: #231026-04 | Macaque in distress</div>
                </div>
                <div className="badges-row">
                    <span className="badge blue">Case ID</span>
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
                            <label className="form-label">Location of Call</label>
                            <input className="form-input" defaultValue="Address" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Location of Encounter</label>
                            <input className="form-input" defaultValue="Address" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Case Info</label>
                            <textarea className="form-input" defaultValue="Report of a juvenile macaque caught in fencing at location. Caller says it seems injured." />
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="grid-col">
                    <div className="card">
                        <div className="card-title">Action Conclusion</div>

                        <div className="form-group">
                            <label className="form-label">Species</label>
                            <input className="form-input" defaultValue="Long-tailed Macaque" />
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

                        <div className="form-group">
                            <label className="form-label">Additional Info</label>
                            <textarea className="form-input" defaultValue="Fencing removed, animal inspected for injuries, superficial cuts cleaned, monitored. Deemed fit for release." style={{ minHeight: '90px' }} />
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
                </div>

                {/* Column 4 */}
                <div className="grid-col">
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

export default VolnCasePage;
