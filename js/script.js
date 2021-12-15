function f_theme_change() {
    event.preventDefault();

    var src = '';

    if ($('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('#theme_var').attr('href', './css/var_light.css');

        $('.theme-icon').attr('src', './resource/sun.svg');
        $('.theme-icon').attr('height', 24);

        $('.custom-change-icon').each(function () {
            src = $(this).attr('src');
            $(this).attr('src', src.replace('_dark.svg', '.svg'));
        });
    } else {
        $('body').addClass('dark');
        $('#theme_var').attr('href', './css/var_dark.css');

        $('.theme-icon').attr('src', './resource/moon.svg');
        $('.theme-icon').attr('height', 22);

        $('.custom-change-icon').each(function () {
            src = $(this).attr('src');
            $(this).attr('src', src.replace('.svg', '_dark.svg'));
        });
    }
}