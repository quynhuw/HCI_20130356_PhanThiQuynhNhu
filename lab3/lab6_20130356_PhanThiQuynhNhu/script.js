document.addEventListener("DOMContentLoaded", () => {
  const courseGroups = [
    { name: "Web Development", learnersNumber: 13.3 },
    { name: "JavaScript", learnersNumber: 17.7 },
    { name: "React JS", learnersNumber: 7 },
    { name: "Angular", learnersNumber: 4 },
    { name: "Java", learnersNumber: 15.5 },
    { name: "Android Development", learnersNumber: 8 },
    { name: "iOS Development", learnersNumber: 4 },
    { name: "CSS", learnersNumber: 9 },
  ];

  const coursesContainer = document.querySelector(".courses-group");
  courseGroups.map((course) => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");

    const courseName = document.createElement("p");
    courseName.classList.add("course-item-name");
    courseName.textContent = course.name;

    const learnersCount = document.createElement("p");
    learnersCount.textContent = `${course.learnersNumber}M+ learners`;

    courseItem.appendChild(courseName);
    courseItem.appendChild(learnersCount);

    coursesContainer.appendChild(courseItem);
  });
});
