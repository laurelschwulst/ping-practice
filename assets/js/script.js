
const phrases = [
    "an ambient journaling method",
    "develop ways to flow & unblock yourself",
    "ongoing conversation with yourself",
    "“a camera roll for your thoughts”",
    "find personal flow through journaling"
];

(function ($) {
    count = 0;
    console.log('hi');
    setInterval(function () {
        $("#changing-description").fadeOut(750, function () {
            console.log('hihi');
            $(this).text(phrases[count % phrases.length]).fadeIn(400);
        });
        count++;
    }, 3000);
})(jQuery);