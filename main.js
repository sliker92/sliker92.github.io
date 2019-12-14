let devices = document.querySelectorAll('.devices-item');

devices.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function (event) {
        event = event || window.event;
        console.log(event.target);
    });
});
