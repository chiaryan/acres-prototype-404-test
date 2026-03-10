import React, { useState } from 'react';
import { Search, Image, Volume2, FileText, Download, Play, Ear } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const mockResources = [
    {
        id: 1,
        title: "Common Snakes of Singapore",
        category: "Identification Charts",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop",
        description: "Quick reference guide for identifying common native snakes.",
        fileSize: "2.4 MB"
    },
    {
        id: 2,
        title: "Macaque Warning Calls",
        category: "Animal Vocalisations: Audio clips",
        type: "audio",
        imageUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop", // placeholder
        description: "Aggressive and warning vocalizations from long-tailed macaques.",
        fileSize: "1.2 MB"
    },
    {
        id: 3,
        title: "Reptile Handling SOP v2.1",
        category: "Field SOP",
        type: "document",
        imageUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop", // placeholder
        description: "Standard operating procedures for rescuing urban reptiles securely.",
        fileSize: "450 KB"
    },
    {
        id: 4,
        title: "Common Bird IDs",
        category: "Identification Charts",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop",
        description: "Reference sheet for identifying both migratory and common native birds.",
        fileSize: "3.1 MB"
    },
    {
        id: 5,
        title: "Distressed Bird Calls",
        category: "Animal Vocalisations: Audio clips",
        type: "audio",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop", // placeholder
        description: "Key audio indicators separating distressed cries from normal calls.",
        fileSize: "800 KB"
    },
    {
        id: 6,
        title: "First Responder Triage SOP",
        category: "Field SOP",
        type: "document",
        imageUrl: "https://images.unsplash.com/photo-1596781295245-5c1eb0acc91d?w=400&h=300&fit=crop",
        description: "Immediate action guide upon arriving at an animal conflict scene.",
        fileSize: "1.1 MB"
    }
];

const categories = [
    { name: "Identification Charts", icon: <Image size={18} /> },
    { name: "Animal Vocalisations: Audio clips", icon: <Volume2 size={18} /> },
    { name: "Field SOP", icon: <FileText size={18} /> }
];

function ResourcesPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const activeCategory = queryParams.get('category') || "Identification Charts";

    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = mockResources.filter(resource => {
        const matchesCategory = resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getIconForType = (type) => {
        switch (type) {
            case 'image': return <Image size={48} color="#94a3b8" />;
            case 'audio': return <Volume2 size={48} color="#94a3b8" />;
            case 'document': return <FileText size={48} color="#94a3b8" />;
            default: return <Image size={48} color="#94a3b8" />;
        }
    };

    return (
        <div className="resources-page-container">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <div className="page-title">Resource Portal</div>
            </div>

            <div className="resources-layout">
                {/* Main Resource Gallery Area */}
                <div className="resources-main-content">
                    <div className="resources-toolbar">
                        <div className="form-input-with-icon search-bar-container">
                            <Search size={18} style={{ position: 'absolute', left: '0.75rem', color: 'var(--text-muted)' }} />
                            <input
                                className="form-input"
                                placeholder={`Search ${activeCategory}...`}
                                style={{ paddingLeft: '2.5rem', width: '100%', maxWidth: '400px' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="resources-gallery-grid">
                        {filteredResources.length > 0 ? (
                            filteredResources.map((item) => (
                                <div className="resource-card" key={item.id}>
                                    <div className="resource-card-media">
                                        {item.type === 'image' ? (
                                            <div className="rc-img-wrapper" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                                        ) : (
                                            <div className="rc-icon-wrapper">
                                                {getIconForType(item.type)}
                                                {item.type === 'audio' && (
                                                    <div className="audio-play-btn"><Play size={20} fill="white" /></div>
                                                )}
                                            </div>
                                        )}
                                        <div className="rc-type-badge">
                                            {item.type === 'image' && <Image size={12} />}
                                            {item.type === 'audio' && <Volume2 size={12} />}
                                            {item.type === 'document' && <FileText size={12} />}
                                            <span style={{ marginLeft: '4px', textTransform: 'capitalize', fontSize: '0.7rem', fontWeight: 600 }}>{item.type}</span>
                                        </div>
                                    </div>
                                    <div className="resource-card-body">
                                        <h3 className="rc-title">{item.title}</h3>
                                        <p className="rc-desc">{item.description}</p>
                                        <div className="rc-footer">
                                            <span className="rc-size">{item.fileSize}</span>
                                            <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Download size={14} /> Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-resources-found">
                                <Ear size={40} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                                <h3>No resources found</h3>
                                <p>Try adjusting your search criteria within this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResourcesPage;
