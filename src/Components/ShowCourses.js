import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styles

// Define the ShowCourses component
const ShowCourses = () => {
    // Function to fetch courses from a database or API
    const fetchCourses = () => {
        // This is just a placeholder, you can replace it with actual code to fetch courses
        return [
            { id: 1, name: "Introduction to JavaScript", enrolled: false, time: "9:00 AM", roomNumber: "101" },
            { id: 2, name: "Advanced JavaScript Concepts", enrolled: false, time: "11:00 AM", roomNumber: "102" },
            { id: 3, name: "JavaScript Frameworks: React, Angular, Vue", enrolled: false, time: "1:00 PM", roomNumber: "103" },
            { id: 4, name: "React Native Development", enrolled: false, time: "3:00 PM", roomNumber: "104" },
            { id: 5, name: "Node.js Backend Development", enrolled: false, time: "5:00 PM", roomNumber: "105" }
        ];
    };

    // State to manage courses
    const [courses, setCourses] = useState(fetchCourses());
    const [newCourseName, setNewCourseName] = useState('');
    const [newCourseTime, setNewCourseTime] = useState('');
    const [newRoomNumber, setNewRoomNumber] = useState('');

    // Function to handle enrollment button click
    const handleEnrollClick = async (courseId, courseName) => {
        try {
            const response = await fetch('http://localhost:8081/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ courseId, courseName })
            });

            if (response.ok) {
                // Toggle the enrolled status of the clicked course locally
                const updatedCourses = courses.map(course => {
                    if (course.id === courseId) {
                        return { ...course, enrolled: !course.enrolled };
                    }
                    return course;
                });

                // Update the state with the modified courses array
                setCourses(updatedCourses);
            } else {
                console.error('Failed to enroll in course');
            }
        } catch (error) {
            console.error('Error enrolling in course:', error);
        }
    };

    // Function to handle adding a new course
    const handleAddCourse = () => {
        const newCourse = {
            id: courses.length + 1,
            name: newCourseName,
            enrolled: false,
            time: newCourseTime,
            roomNumber: newRoomNumber
        };

        setCourses([...courses, newCourse]);
        setNewCourseName('');
        setNewCourseTime('');
        setNewRoomNumber('');
    };

    // Function to handle deleting a course
    const handleDeleteCourse = (courseId) => {
        const updatedCourses = courses.filter(course => course.id !== courseId);
        setCourses(updatedCourses);
    };

    return (
        <div>
            <h2>Available Courses:</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id} className="course-item">
                        <span className="course-name">{course.name} - {course.time} - Room {course.roomNumber}</span>
                        <button className="enroll-button" onClick={() => handleEnrollClick(course.id, course.name)}>
                            {course.enrolled ? 'Enrolled' : 'Enroll'}
                        </button>
                        <button className="delete-button" onClick={() => handleDeleteCourse(course.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="add-course">
                <h2>Add New Course:</h2>
                <input
                    type="text"
                    placeholder="Course Name"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Time"
                    value={newCourseTime}
                    onChange={(e) => setNewCourseTime(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Room Number"
                    value={newRoomNumber}
                    onChange={(e) => setNewRoomNumber(e.target.value)}
                />
                <button onClick={handleAddCourse}>Add Course</button>
            </div>
        </div>
    );
};

export default ShowCourses;
