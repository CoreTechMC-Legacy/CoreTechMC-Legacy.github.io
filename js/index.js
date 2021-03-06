$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];}}})
        (document.createElement('div'));
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (typeof callback === 'function') callback();
        });
        return this;
    },
});

$(document).ready(function () {
    var infoDiv = $('.infoDiv');

    changeColor = function (color) {
        document.getElementById("hideMe").style.color = '#ffff';
    }

    hide = function () {
        infoDiv.text('󠀡');
        document.getElementById("hideMe").style.color = '#ffff';
    }

    showText = function (LocalText) {
        infoDiv.animateCss('tada');
        infoDiv.text(LocalText);
        changeColor();
    }
});
