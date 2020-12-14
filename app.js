// button
const toggle = document.getElementById('toggle');
// nav
const nav = document.getElementById('nav');

// listen for a click
toggle.addEventListener('click', () => nav.classList.toggle('active'));
