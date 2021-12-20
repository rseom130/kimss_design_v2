$(document).ready(function () {
    $('.custom-music-list-checkbox').on('click', function () {
        var select_checkbox = 0;
        if ($(this).is(':checked')) {
            $(this).closest('.list-item').addClass('select');
        } else {
            $(this).closest('.list-item').removeClass('select');
        }

        $('.custom-music-list-checkbox').each(function () {
            if (!$(this).is(':checked')) {
                $('.custom-music-list-all-check').removeClass('active');
            } else {
                select_checkbox++;
            }
        });
        if (select_checkbox == $('.custom-music-list-checkbox').length) {
            $('.custom-music-list-all-check').addClass('active');
        }
    });

    $('.custom-music-list-all-check').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.custom-music-list-checkbox').prop('checked', true);
            $('.custom-music-list .list-item').addClass('select');
        } else {
            $(this).removeClass('active');
            $('.custom-music-list-checkbox').prop('checked', false);
            $('.custom-music-list .list-item').removeClass('select');
        }
    });
});