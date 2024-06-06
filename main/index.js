console.log("Console is working");

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

})

sr.reveal('.about', {delay: 200, origin: left});
sr.reveal('.image', {delay: 200, origin: right});