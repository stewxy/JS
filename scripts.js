const canvas = document.getElementById("cnavas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = []

let mouse = {
    x: null,
    y: null,
    radius: 150
}