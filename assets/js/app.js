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
let boleen = false;
nbrClic = 0

function start() {
    for (i = 0; i < box.length; i++) {
        let rand = Math.floor(Math.random() * (icons.length - 1));
        box[i].innerHTML = "<img src='" + icons[rand] + "' alt='image' class='hidden'>";
        icons.splice(rand, 1);
    }
    boleen = true
}

function verif() {
    if (boleen === true) {
        nbrClic++
        if (nbrClic === 1) {
            url1 = document.querySelector('.limg');

        }


        if (nbrClic === 2) {
            url2 = document.querySelector('.limg2')
            if (url1.src !== url2.src) {
                setTimeout(()=> {
                    $('.flip').removeClass('flip');
                    $('.limg').addClass('hidden').removeClass('limg');
                    $('.limg2').addClass('hidden').removeClass('limg2');
                    setTimeout(()=> {
                        url1 = '';
                        url2 = '';
                        nbrClic = 0
                        console.log(url1);
                        console.log(url2);
                    }, 100)
                    console.log(boleen)
                }, 1000)
            }
            if (url1.src === url2.src) {
                $('.limg').removeClass('limg');
                $('.limg2').removeClass('limg2');
                alert('Ok')
                setTimeout(()=> {
                    url1 = '';
                    url2 = '';
                    nbrClic = 0
                    console.log(url1);
                    console.log(url2);
                }, 100)
            }
        }
    }

    console.log(nbrClic)
    console.log(url1.src)
    console.log(url2)
    console.log(boleen)
}

box1.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
    if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box2.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
    if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box3.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
    if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box4.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
      if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box5.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
    if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box6.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
      if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box7.click(function () {
   $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
      if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})
box8.click(function () {
    $(this).addClass('flip');
    $(this).children('img').removeClass('hidden');
      if (nbrClic === 0) {
        $(this).children('img').addClass('limg');
    }
    if (nbrClic === 1) {
        $(this).children('img').addClass('limg2');
    }
    verif()
})

$('#start').click(function () {
    start()
})

