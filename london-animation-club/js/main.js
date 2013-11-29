// Initialise modal box
$('.cta').click(function () {
    $('.modal').fadeIn(500);
    return false;
});

// Close with close button click
$('.modal').on('click', '.modalClose', function (event) {
    $('.modal').fadeOut(500);
});

// Close with escape key
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $('.modal').fadeOut(500);
    }
});

// Close with mouse click outside of modal box
$('.modalOverlay').not('.modalInner').click(function () {
    $('.modal').fadeOut(500);
});

// Toggle content
$('.toggle').on('click', 'a:first', function (event) {
    $(this).parent().parent().toggleClass('open').find('p').slideToggle(500);
    return false;
});

// Initialise fitVids
$(".container").fitVids();