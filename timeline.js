// timeline.js
document.addEventListener("DOMContentLoaded", function() {
    const timelineContainer = document.getElementById('timeline');

    // Define the events in your timeline
    const timelineEvents = [
        { year: 2005, event: 'I was born' },
        { year: 2014, event: 'Started building video games' },
        { year: 2020, event: 'Made my first video game' }
    ];

    // Dynamically create timeline events
    timelineEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        eventElement.innerHTML = `<h3>${event.year}</h3><p>${event.event}</p><img src="images/${event.year}.jpg" alt="Event for ${event.year}">`;
        timelineContainer.appendChild(eventElement);
    });
});
