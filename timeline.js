document.addEventListener("DOMContentLoaded", function() {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = ''; // Clear existing events

    // Define the events in your timeline
    const timelineEvents = [
        { year: 2005, event: 'Hello World!' },
        { year: 2014, event: 'Began to explore my passion for coding, diving into video game development across various platforms.' },
        { year: 2020, event: 'Created my first solo video game using Maya and Unity, and enrolled in online coding courses at my local community college to learn more.' },
    ];

    // Dynamically create timeline events with flipping cards, alternating left and right
    timelineEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        const positionClass = index % 2 === 0 ? 'left' : 'right';
        eventElement.classList.add('timeline-event', positionClass, 'flip-card');
        eventElement.setAttribute('data-aos', 'flip-left'); // Add AOS attribute for animation

        eventElement.innerHTML = `
            <div class="flip-card-inner" tabindex="0" role="button" aria-pressed="false">
                <div class="flip-card-front">
                    <img src="images/${event.year}.png" alt="Event in ${event.year}">
                </div>
                <div class="flip-card-back">
                    <h3>${event.year}</h3>
                    <p>${event.event}</p>
                </div>
            </div>
        `;

        timelineContainer.appendChild(eventElement);
    });

    // Flip Card Click Functionality for Mobile and Accessibility
    const flipCards = document.querySelectorAll('.flip-card-inner');

    flipCards.forEach(card => {
        // Click event
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            const isFlipped = card.classList.contains('flipped');
            card.setAttribute('aria-pressed', isFlipped);
        });

        // Keyboard event
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
                const isFlipped = card.classList.contains('flipped');
                card.setAttribute('aria-pressed', isFlipped);
            }
        });
    });
});
