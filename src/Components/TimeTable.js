// Timetable.js
import React from 'react';

const Timetable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = [
        { startTime: '9:00 AM', endTime: '10:50 AM' },
        { startTime: '11:00 AM', endTime: '12:50 PM' },
        { startTime: '1:45 PM', endTime: '2:40 PM' },
        { startTime: '2:40 PM', endTime: '3:30 PM' },
        { startTime: '3:30 PM', endTime: '5:20 PM' }
    ];
    
    // Hardcoded course data
    const courses = {
        'Monday': {
            '9:00 AM': { course: 'Introduction to JavaScript', room: 'Room 101' },
            '11:00 AM': { course: '', room: '' },
            '1:45 PM': { course: 'JavaScript Frameworks: React, Angular, Vue', room: 'Room 203' },
            '2:40 PM': { course: 'React Native Development', room: 'Room 305' },
            '3:30 PM': { course: '', room: '' }
        },
        'Tuesday': {
            '9:00 AM': { course: '', room: '' },
            '11:00 AM': { course: 'Advanced JavaScript Concepts', room: 'Room 102' },
            '1:45 PM': { course: '', room: '' },
            '2:40 PM': { course: '', room: '' },
            '3:30 PM': { course: '', room: '' }
        },
        'Wednesday': {
            '9:00 AM': { course: '', room: '' },
            '11:00 AM': { course: '', room: '' },
            '1:45 PM': { course: '', room: '' },
            '2:40 PM': { course: '', room: '' },
            '3:30 PM': { course: '', room: '' }
        },
        'Thursday': {
            '9:00 AM': { course: '', room: '' },
            '11:00 AM': { course: '', room: '' },
            '1:45 PM': { course: '', room: '' },
            '2:40 PM': { course: '', room: '' },
            '3:30 PM': { course: '', room: '' }
        },
        'Friday': {
            '9:00 AM': { course: '', room: '' },
            '11:00 AM': { course: '', room: '' },
            '1:45 PM': { course: '', room: '' },
            '2:40 PM': { course: '', room: '' },
            '3:30 PM': { course: 'Node.js Backend Development', room: 'Room 401' }
        }
    };

    return (
        <div className="timetable">
            <h2>Timetable</h2>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        {days.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((timeSlot, index) => (
                        <tr key={index}>
                            <td>{`${timeSlot.startTime} - ${timeSlot.endTime}`}</td>
                            {days.map(day => (
                                <td key={`${day}-${timeSlot.startTime}`}>
                                    <ul>
                                        <li>{courses[day][timeSlot.startTime].course}</li>
                                        <li>{courses[day][timeSlot.startTime].room}</li>
                                    </ul>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;
