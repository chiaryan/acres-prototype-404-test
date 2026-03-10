import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar as CalendarIcon, UserCheck, Star } from 'lucide-react';

const MOCK_VOLUNTEERS = [
    { id: 1, name: 'Anika Sharma', role: 'Handler' },
    { id: 2, name: 'Ben Wong', role: 'Driver' },
    { id: 3, name: 'Charlie Davis', role: 'Medic' },
    { id: 4, name: 'Diana Lim', role: 'Handler' },
    { id: 5, name: 'Ethan Hunt', role: 'Driver' },
    { id: 6, name: 'Fiona Goh', role: 'Handler' },
    { id: 7, name: 'George Tan', role: 'Trainee' },
    { id: 8, name: 'Hannah Lee', role: 'Trainee' },
];

const INITIAL_ALLOCATIONS = {
    // format YYYY-MM-DD : [volunteer IDs]
    "2026-03-02": [1, 2],
    "2026-03-05": [3, 4, 5],
    "2026-03-08": [1, 6],
    "2026-03-10": [2],
    "2026-03-15": [2, 5],
};

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function VolnAllocationPage() {
    const defaultDate = new Date(2026, 2, 1); // March 2026
    const [currentDate, setCurrentDate] = useState(defaultDate);
    const [allocations, setAllocations] = useState(INITIAL_ALLOCATIONS);
    const [selectedDate, setSelectedDate] = useState(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const getFormatDate = (day) => {
        const mm = String(month + 1).padStart(2, '0');
        const dd = String(day).padStart(2, '0');
        return `${year}-${mm}-${dd}`;
    };

    const toggleVolunteer = (dateStr, volId) => {
        setAllocations(prev => {
            const currentDayAlloc = prev[dateStr] || [];
            if (currentDayAlloc.includes(volId)) {
                return { ...prev, [dateStr]: currentDayAlloc.filter(id => id !== volId) };
            } else {
                if (currentDayAlloc.length >= 3) return prev; // Max 3
                return { ...prev, [dateStr]: [...currentDayAlloc, volId] };
            }
        });
    };

    const stats = useMemo(() => {
        const counts = {};
        Object.values(allocations).forEach(dayAlloc => {
            dayAlloc.forEach(id => {
                counts[id] = (counts[id] || 0) + 1;
            });
        });

        const sorted = Object.entries(counts)
            .map(([id, count]) => ({ vol: MOCK_VOLUNTEERS.find(v => v.id === parseInt(id)), count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 3); // top 3

        return sorted;
    }, [allocations]);

    const renderCalendarDays = () => {
        const cells = [];
        // empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            cells.push(<div key={`empty-${i}`} className="cal-cell empty"></div>);
        }

        // actual days
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = getFormatDate(d);
            const dayAlloc = allocations[dateStr] || [];
            const isSelected = selectedDate === dateStr;

            cells.push(
                <div
                    key={d}
                    className={`cal-cell ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDate(dateStr)}
                >
                    <div className="cal-cell-header">{d}</div>
                    <div className="cal-cell-content">
                        {dayAlloc.map(id => {
                            const v = MOCK_VOLUNTEERS.find(vol => vol.id === id);
                            return (
                                <div key={id} className="cal-assigned-chip">
                                    {v ? v.name.split(' ')[0] : 'Ukn'}
                                </div>
                            );
                        })}
                        {/* {dayAlloc.length < 3 && dayAlloc.length > 0 && <div className="cal-slots-left">{3 - dayAlloc.length} slots free</div>}
                        {dayAlloc.length === 0 && <div className="cal-slots-left empty">3 slots free</div>} */}
                    </div>
                </div>
            );
        }
        return cells;
    };

    return (
        <div className="voln-page-container">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <div className="page-title">Volunteer Allocation</div>
                {/* <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                    Schedule up to 3 volunteers per day to ensure complete coverage.
                </div> */}
            </div>

            <div className="voln-layout">
                {/* Main Calendar View */}
                <div className="voln-calendar-section">
                    <div className="cal-toolbar">
                        <div className="cal-month-title">
                            <CalendarIcon size={20} className="cal-icon" />
                            {MONTH_NAMES[month]} {year}
                        </div>
                        <div className="cal-nav-btns">
                            <button className="btn btn-outline btn-icon" onClick={handlePrevMonth}><ChevronLeft size={18} /></button>
                            <button className="btn btn-outline btn-icon" onClick={handleNextMonth}><ChevronRight size={18} /></button>
                        </div>
                    </div>

                    <div className="calendar-grid">
                        {DAY_NAMES.map(day => (
                            <div key={day} className="cal-header-cell">{day}</div>
                        ))}
                        {renderCalendarDays()}
                    </div>
                </div>

                {/* Sidebar for stats and daily assignment */}
                <div className="voln-sidebar-section">

                    {/* Top 3 Allocated */}
                    <div className="stats-panel">
                        <div className="panel-title">
                            <Star size={16} /> Most Allocated (All Time)
                        </div>
                        <div className="stats-list">
                            {stats.length > 0 ? stats.map((stat, idx) => (
                                <div key={idx} className="stat-item">
                                    <div className="stat-info">
                                        <div className="stat-name">{stat.vol?.name}</div>
                                        {/* <div className="stat-role">{stat.vol?.role}</div> */}
                                    </div>
                                    <div className="stat-count">
                                        <span className="count-num">{stat.count}</span> shifts
                                    </div>
                                </div>
                            )) : (
                                <div className="stat-empty">No volunteers assigned yet.</div>
                            )}
                        </div>
                    </div>

                    {/* Daily Assignment Box */}
                    {selectedDate ? (
                        <div className="assignment-panel">
                            <div className="panel-title" style={{ backgroundColor: '#f0f9ff', color: '#0369a1', borderBottom: '1px solid #bae6fd' }}>
                                <UserCheck size={16} />
                                Assign for {selectedDate}
                            </div>
                            <div className="assign-list">
                                {MOCK_VOLUNTEERS.map(vol => {
                                    const currentAlloc = allocations[selectedDate] || [];
                                    const isSelected = currentAlloc.includes(vol.id);
                                    const isMaxedOut = currentAlloc.length >= 3 && !isSelected;

                                    return (
                                        <div
                                            key={vol.id}
                                            className={`assign-vol-row ${isSelected ? 'selected' : ''} ${isMaxedOut ? 'disabled' : ''}`}
                                            onClick={() => {
                                                if (!isMaxedOut) toggleVolunteer(selectedDate, vol.id);
                                            }}
                                        >
                                            <div className="assign-vol-info">
                                                <div className="assign-vol-name">{vol.name}</div>
                                                {/* <div className="assign-vol-role">{vol.role}</div> */}
                                            </div>
                                            <div className="assign-checkbox">
                                                {isSelected ? (
                                                    <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div style={{ width: 6, height: 10, borderBottom: '2px solid white', borderRight: '2px solid white', transform: 'rotate(45deg)', marginBottom: 2 }}></div>
                                                    </div>
                                                ) : (
                                                    <div className="empty-checkbox"></div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="assignment-panel empty-state">
                            <Users size={32} color="var(--text-muted)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                            <p>Select a date from the calendar<br />to assign volunteers.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
