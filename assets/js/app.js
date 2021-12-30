let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

let box = document.querySelectorAll('.box');
let frontface = $('.frontFace');


const icons = [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png'
];

let url1 = '';
let url2 = '';

function start() {
    for (i = 0; i < box.length; i++) {
        let rand = Math.floor(Math.random() * (icons.length - 1));
        box[i].innerHTML = "<img src='" + icons[rand] + "' alt='image' class='hidden'>";
        icons.splice(rand, 1);
    }
}

box1.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
    if (box1.children('img').src === box2.children('img').src) {
        alert('hey')
    }
})
box2.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box3.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box4.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box5.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box6.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box7.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})
box8.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
})

$('#start').click(function () {
    start()
})

