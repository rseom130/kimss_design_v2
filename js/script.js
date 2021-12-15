function f_theme_change() {
    if ($('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('#theme_var').attr('href', './css/var_light.css');
    } else {
        $('body').addClass('dark');
        $('#theme_var').attr('href', './css/var_dark.css');
    }
}