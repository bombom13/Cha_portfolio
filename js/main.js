$(document).ready(function () {
    $('#detailthumb').click(function () {
        $('#detail').show();
        $('.modal').show();
    });
    $('#detail2thumb').click(function () {
        $('#detail2').show();
        $('.modal').show();
    });
    $('#posterthumb').click(function () {
        $('#poster').show();
        $('.modal').show();
    });
    $('.modal').click(function () {
        $('.portfolio').hide();
        $('.modal').hide();
    });

    AOS.init();
});