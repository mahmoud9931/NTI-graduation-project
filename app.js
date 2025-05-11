const API_URL = 'http://courses1.runasp.net/api/CourseCard/getall';
const BASE_URL = 'http://courses1.runasp.net';
const container = document.getElementById('course-container');

fetch(API_URL)
    .then(response => response.json())
    .then(courses => {
        courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';

            card.innerHTML = `
                <img src="${BASE_URL + course.photo}" alt="Course image">
                <h4 class="two-line-ellipsis">${course.title}</h4>
                <p class="three-line-ellipsis">${course.description}</p>
                <button ><a class="mma" href="./card-details.html">Go to learn</a></button>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        container.innerHTML = "<p>Failed to load courses. Please try again later.</p>";
        console.error('Error fetching courses:', error);
    });
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });