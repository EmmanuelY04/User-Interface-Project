// JavaScript code for dynamically adding basketball court areas
document.addEventListener('DOMContentLoaded', function() {
    // Check if the 'areas' element exists on the current page
    const areaContainer = document.getElementById('areas');
    if (areaContainer) {
        // Array of basketball court areas
        const areas = [
            { name: 'Ravenscourt Park', address: '23 Ravenscourt Park' },
            { name: 'Argyle Square Public Basketball Court', address: 'Argyle Square, London WC1H 8AS' },
            { name: 'Finsbury Park', address: 'Finsbury Park, London N4 4LX' }
        ];

        // Only if 'areas' container is found, append new elements
        areas.forEach(area => {
            const areaElement = document.createElement('div');
            areaElement.innerHTML = `<h3>${area.name}</h3><p>${area.address}</p>`;
            areaContainer.appendChild(areaElement);
        });
    } else {
        // If 'areas' container is not found, log a message to the console (optional)
        console.log('No areas container found on this page.');
    }
});
