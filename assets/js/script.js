//Display current day in the header
var currentDate = moment().format("MMMM Do, YYYY");
$('#currentDay').text(currentDate);

//Creating a variable for current time
var currentTime = moment().hour()
console.log(typeof currentTime)

//Creating an iteration to loop through each time-block
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id'))
    console.log(typeof hourBlock)
    //Creating condition to compare time and change colors
    if(hourBlock < currentTime) {
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future')
    } else if(hourBlock === currentTime){
        $(this).removeClass('past')
        $(this).addClass('present')
        $(this).removeClass('future')
    } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
 });

//Creating local storage
 $('.saveBtn').on('click', function(){
    var timeBlockKey = $(this).parent().attr('id')
    var textAreaVal = $(this).siblings('textarea').val() 
    localStorage.setItem(timeBlockKey, textAreaVal)
})

//Retrieving from local storage
$('#9 textarea').val(localStorage.getItem("9"))
$('#10 textarea').val(localStorage.getItem("10"))
$('#11 textarea').val(localStorage.getItem("11"))
$('#12 textarea').val(localStorage.getItem("12"))
$('#13 textarea').val(localStorage.getItem("13"))
$('#14 textarea').val(localStorage.getItem("14"))
$('#15 textarea').val(localStorage.getItem("15"))
$('#16 textarea').val(localStorage.getItem("16"))
$('#17 textarea').val(localStorage.getItem("17"))