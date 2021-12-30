let box1 =$('#box1');
let box2 =$('#box2');
let box3 =$('#box3');
let box4 =$('#box4');

let box = document.querySelectorAll('.box');
let frontface =$('.frontFace');


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



function start() {
    for (i=0; i<box.length; i++) {


        let rand = Math.floor(Math.random() * (icons.length - 1));
        box[i].innerHTML = "<img src='" + icons[rand] + "' alt='image'>";
        icons.splice(rand, 1);
    }
}

$('#start').click(function () {
    start()
})