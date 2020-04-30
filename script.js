//This is a JavaScript comment

/* This is a multiline
Javascript comment
*/
let name = 'David';

console.log(name + "'s apples");
console.log('Hello World!');

// így néz ki alapból, ide kell behelyettesíteni a dolgokat $('selector').action()

$('h1').text('We are having a break until 17:05');
$('p').html('StayAtHome Coding Camp, Like:<strong>13</strong>')

$('strong').css('background', 'lime');
$('strong').css('padding', '10px')

$('h2').toggleClass('blue');
// $('h2').toggleClass('blue');   ----> ha még egyszer leírod, akkor nem lesz kék a háttér!

$('ul').append('<li>My name is' + name + '</li>')
// ezzel nem változtattad meg a <li> elemeit, csak hozzáadtál egyet. A + name + a legfelső sorból jön a letből

let addButtonHandler = () => {
    if ($('li').length < 5) {
     $('ul').append('<li>My name is' + name + '</li>')
    }
};

$('#addButton').click(addButtonHandler);

$('#removeButton').click(() => {
    $('li:last-child').remove();
})


let age = 25;

console.log('Starting the if');

if (age < 18) {
    console.log('Not old enough to drink')
} else {
    console.log('Old enough to drink')
};

console.log('This is the after the if');


let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

