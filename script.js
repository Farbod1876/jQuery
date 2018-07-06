/* ///1st///
$('#para').click(function(){
	$('#para').hide();
});
*/


/* ///2nd///
$(document).ready(function(){
	$('#para').fadeIn('slow');
});

*/
/* ////3rd///
$('#img1').load(function(){
	alert('The image has loaded')
});
//If two or more images wantto open up by a single atribute ,then instead of using ID we just use the tag name for all the images at the same time and by putting only one atribute.
 //Notice: The img root page address must be put only in one line and prevent to use two separate lines.
*/
/*
$(document).ready(function(){
	alert('The DOM is ready');
});
//Notice: By putting this atribute the page gives the alert as soon as it opens and the loads the image!
*/
//---------------------------------------

//SELECTORS
//Astriks will select all elements in our webpage.

/*
//will show us the number of lines.
var count = $('*').length;
alert(count);
*/

// ////4th////
//To choose and find all the elements in a single parent!
/*
var count = $('#parent').length;
alert(count);
*/

/*
// /////5th////
$('#para1').click(function(){
	alert('you clicked para1');
});
*/
/*
// ////6th////
$('.para2').click(function(){
	alert('you clicked para2');
});
*/
/*
// ////7th////
$('p').text('Hello there');
*/
// /////8th/////
// For type element we use :
/*
$(':text').focusin(function (){
	$(':text').css('background','green');
});
*/
//to select only one element:
/*
$(':text').focusin(function (){
	$(this).css('background','green');
});
*/
// To change the color back to the normal one:
/*
$(':text').focusin(function (){
	$(this).css('background','green');
});
$(':text').blur(function (){
	$(':text').css('background','white');
});
*/
// /////9th/////
/*
$('#button, #para').click(function(){
	alert('somthing was clicked');
});
*/
// ////10th/////
/*
$('p').click(function(){
	$(this).text('that tickles');
});
*/

// To find somthing specific within paragraphs: 
/* // ///11th////
$("p:contains('Dadashian')").css('background', 'yellow');
$("p:contains('A')").css('background', 'orange');
*/


// odd  or even selectors:
/* // ////12th////
$('p:odd').css('color', 'red');
$('p:even').css('color', 'green');
*/
// The selector does not work!
/*
// ////13th////
$('#image_toggler').dblsclick(function(){
	$('#farbod.img').toggle();
});
*/
/*
$('#username').keydown (function(){
	alert('you pressed a key');
});
*/
/*
$('#username').keydown (function(){
	var username_value = $('#username').val();
	$('#username_feedback').html(username_value);
});
*/
/*
$('#username').keyup (function(){
	var username_value = $('#username').val();
	$('#username_feedback').html(username_value);
});
*/


//---------------------------------------------------


//My jQuery project:

$(document).ready(function(){
	$('#fadein').fadeIn(1000);
});

$(document).ready(function(){
	$('#fadein1').fadeIn(3000);
});
$(document).ready(function(){
	$('#fadein2').fadeIn(5000);
});
$(document).ready(function(){
	$('#fadein3').fadeIn(8000);
});



$('#btnSlideUp').click(function() {
    $('#slideMe').slideUp('slow');
});
$('#btnSlideDown').click(function() {
    $('#slideMe').slideUp();
});
$('#btnSlideToggle').click(function() {
    $('#slideMe').slideToggle('fast');
});
/*
var count = $('*').length;
alert(count);
*/
$('#para1').click(function(){
	alert('you clicked para1');
});

$(':text').focusin(function (){
	$(this).css('background','green');
});
$(':text').blur(function (){
	$(':text').css('background','white');
});
$(':password').focusin(function (){
	$(this).css('background','green');
});
$(':password').blur(function (){
	$(':password').css('background','white');
});

$('li:odd').css('color', 'purple');
$('li:even').css('color', 'red');

$("li:contains('HOLLY')").css('background', 'yellow');






































































