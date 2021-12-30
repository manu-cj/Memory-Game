let box1 =$('#box1');
let box2 =$('#box2');
let box3 =$('#box3');
let box4 =$('#box4');
let box5 =$('#box5');
let box6 =$('#box6');
let box7 =$('#box7');
let box8 =$('#box8');

let box = document.querySelectorAll('.box');
let frontface =$('.frontFace');


const icons = [
    'url(/assets/img/Bulbasaur.png)',
    'url(/assets/img/Charmander.png)',
    'url(/assets/img/pikachu.png)',
    'url(/assets/img/Squirtle.png)',
    'url(/assets/img/Bulbasaur.png)',
    'url(/assets/img/Charmander.png)',
    'url(/assets/img/pikachu.png)',
    'url(/assets/img/Squirtle.png)'


];


function start() {
    for (i=0; i<box.length; i++) {
        let rand = Math.floor(Math.random() * (icons.length - 1));
        box[i].style.backgroundImage = icons[rand];
        icons.splice(rand, 1);
    }
}

box1.click(function () {
    $(this).addClass('flip');
    start()
})
box2.click(function () {
    $(this).addClass('flip');
    start()
})
box3.click(function () {
   $(this).addClass('flip');
    start()
})
box4.click(function () {
       $(this).addClass('flip');
    start()
})
box5.click(function () {
     $(this).addClass('flip');
    start()
})
box6.click(function () {
    $(this).addClass('flip');
    start()
})
box7.click(function () {
   $(this).addClass('flip');
    start()
})
box8.click(function () {
   $(this).addClass('flip');
    start()
})




