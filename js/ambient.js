'use strict';

const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const baseTTL = 100;
const rangeTTL = 500;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseSize = 2;
const rangeSize = 10;
const baseHue = 10;
const rangeHue = 100;
const noiseSteps = 2;
const xOff = 0.0025;
const yOff = 0.005;
const zOff = 0.0005;
const backgroundColor = 'hsla(60,50%,3%,1)';

let container;
let canvas;
let ctx;
let center;
let gradient;
let tick;
let particleProps;

function setup() {
    createCanvas();
    resize();
    initParticles();
    draw();
}

function createCanvas() {
    container = document.querySelector('.content--canvas');
    canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
    };
    canvas.b.style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `;
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d')
    };
    center = [];
}

function resize() {
    const { innerWidth, innerHeight } = window;

    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;

    ctx.a.drawImage(canvas.b, 0, 0);

    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);

    center[0] = 0.5 * canvas.a.width;
    center[1] = 0.5 * canvas.a.height;
}

function initParticles() {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
    }
}

function initParticle(i) {
    const x = Math.random() * canvas.a.width;
    const y = Math.random() * canvas.a.height;
    const theta = Math.atan2(y - center[1], x - center[0]);
    const vx = Math.cos(theta) * 6;
    const vy = Math.sin(theta) * 6;
    const life = 0;
    const ttl = baseTTL + Math.random() * rangeTTL;
    const speed = baseSpeed + Math.random() * rangeSpeed;
    const size = baseSize + Math.random() * rangeSize;
    const hue = baseHue + Math.random() * rangeHue;

    particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
}

function drawParticles() {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
    }
}

function updateParticle(i) {
    const x = particleProps[i];
    const y = particleProps[i + 1];
    const vx = particleProps[i + 2];
    const vy = particleProps[i + 3];
    const life = particleProps[i + 4];
    const ttl = particleProps[i + 5];
    const speed = particleProps[i + 6];
    const size = particleProps[i + 7];
    const hue = particleProps[i + 8];

    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(x, y, size, hue, life / ttl);

    particleProps[i] = x2;
    particleProps[i + 1] = y2;
    particleProps[i + 4] = life + 1;

    if (life > ttl) {
        initParticle(i);
    }
}

function drawParticle(x, y, size, hue, alpha) {
    ctx.a.fillStyle = `hsla(${hue},100%,60%,${alpha})`;
    ctx.a.beginPath();
    ctx.a.arc(x, y, size, 0, 2 * Math.PI);
    ctx.a.fill();
}

function draw() {
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);

    drawParticles();

    ctx.b.drawImage(canvas.a, 0, 0);

    requestAnimationFrame(draw);
}

window.addEventListener('load', setup);
window.addEventListener('resize', resize);