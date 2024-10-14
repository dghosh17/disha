document.addEventListener("DOMContentLoaded", function() {
    const timelineContainer = document.getElementById('timeline');

    // Define the events in your timeline
    const timelineEvents = [
        { year: 2005, event: 'Hello World!' },
        { year: 2014, event: 'Began to explore my passion for coding, diving into video game development across various platforms.' },
        { year: 2020, event: 'Created my first solo video game using Maya and Unity, and enrolled in online coding courses at my local community college to learn more.' },
        { year: 2022, event: 'Joined CosmoCoding as a student teacher, mentoring younger students and sharing my love for coding.' },
        { year: 2023, event: 'Started interning in the ASPIRE biotechnology program, where I discovered the interdisciplinary nature of computing and its broad applications.' },
        { year: 2024, event: 'As a freshman at the University of Illinois, I joined various clubs, participated in my first hackathon, and continued my teaching journey as a course assistant in CS124.' }
    ];

    // Dynamically create timeline events, alternating left and right
    timelineEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        const positionClass = index % 2 === 0 ? 'left' : 'right';
        eventElement.classList.add('timeline-event', positionClass);
        eventElement.innerHTML = `
            <div class="year">${event.year}</div>
            <div class="description">${event.event}</div>
            <img src="images/${event.year}.png" alt="Event for ${event.year}">
        `;
        timelineContainer.appendChild(eventElement);
    });
});
