
document.getElementById("loadDataBtn").addEventListener("click", loadData);
let courseData = [];

function loadData() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file && file.name.endsWith(".json")) {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                courseData = JSON.parse(event.target.result);
                displayCourses(courseData);
                populateFilters(courseData);
            } catch (error) {
                alert("Error loading data: " + error.message);
            }
        };
        reader.readAsText(file);
    } else {
        alert("Please upload a valid JSON file.");
    }
}

function displayCourses(courses) {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course.title;
        li.addEventListener("click", () => showCourseDetails(course));
        courseList.appendChild(li);
    });
}

function showCourseDetails(course) {
    const courseDetails = document.getElementById("courseDetails");
    courseDetails.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Instructor:</strong> ${course.instructor}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Semester:</strong> ${course.semester}</p>
    `;
}

function populateFilters(courses) {
    const levelFilter = document.getElementById("levelFilter");
    const creditsFilter = document.getElementById("creditsFilter");
    const instructorFilter = document.getElementById("instructorFilter");

    const levels = [...new Set(courses.map(course => course.level))];
    levels.forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        levelFilter.appendChild(option);
    });

    const credits = [...new Set(courses.map(course => course.credits))];
    credits.forEach(credit => {
        const option = document.createElement("option");
        option.value = credit;
        option.textContent = credit;
        creditsFilter.appendChild(option);
    });

    const instructors = [...new Set(courses.map(course => course.instructor))];
    instructors.forEach(instructor => {
        const option = document.createElement("option");
        option.value = instructor;
        option.textContent = instructor;
        instructorFilter.appendChild(option);
    });

    levelFilter.addEventListener("change", filterCourses);
    creditsFilter.addEventListener("change", filterCourses);
    instructorFilter.addEventListener("change", filterCourses);
}

function filterCourses() {
    const levelFilter = document.getElementById("levelFilter").value;
    const creditsFilter = document.getElementById("creditsFilter").value;
    const instructorFilter = document.getElementById("instructorFilter").value;

    let filteredCourses = courseData;

    if (levelFilter) {
        filteredCourses = filteredCourses.filter(course => course.level === levelFilter);
    }
    if (creditsFilter) {
        filteredCourses = filteredCourses.filter(course => course.credits == creditsFilter);
    }
    if (instructorFilter) {
        filteredCourses = filteredCourses.filter(course => course.instructor === instructorFilter);
    }

    displayCourses(filteredCourses);
}
