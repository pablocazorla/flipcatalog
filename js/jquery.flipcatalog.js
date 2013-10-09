/* JQuery wipSlider Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 10/09/2013
 */
(function($){
  $.fn.wipSlider = function(options){
		//Settings
		var setting = $.extend({
      		duration : 200,
      		width : '100%',
      		height : 'auto'
		}, options);		
	
		return this.each(function(){			
			
		});
	};
})(jQuery);
$('.wipSlider').wipSlider();