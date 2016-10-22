/*
* developed by http://wolfweb.com.ua
*/
(function($){

    $.fn.simpleTabs = function (options) {

        var settings = $.extend({
            'title' : '.nametab', 
            'content': '.contenttab',
            'cb': ''
        }, options);

        var nametab = $(this).find(settings.title), /*селектор имен табов*/
            contenttab = $(this).find(settings.content),/*селектор содержимого табов*/
            callback = settings.cb,
            tabsBlock = this;
        nametab.on('click', function () {
            var activeClass = $(this).hasClass('actheadtab');/*является ли имя таба активным?*/
            if (!activeClass) {
                var ind = $(this).index();
                $(tabsBlock).find('.actheadtab').removeClass('actheadtab');
                $(this).addClass('actheadtab');
                $(tabsBlock).find('.activetab').removeClass('activetab');
                contenttab.eq(ind).addClass('activetab');
                if (callback) {
                    callback();
                }
            }
        });
    };

})(jQuery);
