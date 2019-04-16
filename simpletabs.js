/*
* developed by http://greencomet.net
*/
(function($){

    $.fn.simpleTabs = function (options) {

        var settings = $.extend({
            'title' : '.nametab', 
            'content': '.contenttab',
            'cb': ''
        }, options);

        var nametab = $(this).find(settings.title), // tab title selector
            contenttab = $(this).find(settings.content), // tab content selector
            callback = settings.cb,
            tabsBlock = this;
        nametab.on('click', function () {
            var activeClass = $(this).hasClass('actheadtab'); // is the tab title active?
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
