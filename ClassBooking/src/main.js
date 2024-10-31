async function fetchTeachers() {
  try {
    const response = await fetch('/src/teachers.json');
    if (!response.ok) {
      throw new Error('error fetching teachers');
    }
    const teachers = await response.json();
    displayTeachers(teachers);
  } catch (error) {
    console.error('There has been a problem with fetching operation:', error);
  }
}

function displayTeachers(teachers){
  const container = document.getElementById('teachers-container');
  teachers.forEach(teacher => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =
        `<img src="${teacher.image}" alt="${teacher.name}">
        <section class="text">
            <h3>${teacher.name}</h3>
            <p>${teacher.description}</p>
            <p class="rating">Rating: ${teacher.rating}</p>
            <button>Book Class</button>
        </section>
          `;
          container.appendChild(card);
  })
}

fetchTeachers();
