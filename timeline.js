const timelineEvents = [
    { year: '2018', event: 'Started my journey in Computer Engineering at the University of Illinois.' },
    { year: '2019', event: 'Joined the Robotics Club and began working on my first project.' },
    { year: '2020', event: 'Completed an internship at XYZ Company, focusing on AI development.' },
    { year: '2021', event: 'Led a team to develop a machine learning model for a Hittite Translator.' },
    { year: '2022', event: 'Graduated with honors and started working at ABC Tech as a Software Engineer.' },
];

const timelineContainer = document.querySelector('.timeline-container');

timelineEvents.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');
    eventElement.innerHTML = `<h3>${event.year}</h3><p>${event.event}</p>`;
    timelineContainer.appendChild(eventElement);
});
