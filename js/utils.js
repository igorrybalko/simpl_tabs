$(document).ready(function(){

	(function(){
		var nametab = $('.nametab'); /*селектор имен табов*/
		var contenttab = $('.contenttab'); /*селектор содержимого табов*/
		nametab.on('click', function(){
			var activeClass = $(this).hasClass('actheadtab'); /*является ли имя таба активным?*/
			if(!activeClass){
				var ind = $(this).index();
				nametab.each(function(){
					nametab.removeClass('actheadtab');
				});
				$(this).addClass('actheadtab');
				contenttab.each(function(){
					contenttab.removeClass('activetab');
					contenttab.eq(ind).addClass('activetab');
				});
			}
		});
	})();
	
});