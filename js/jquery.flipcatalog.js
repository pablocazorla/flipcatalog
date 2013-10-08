/* JQuery FlipCatalog Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 10/08/2013
 */
(function($){
  $.fn.flipCatalog = function(options){
		//Settings
		var setting = $.extend({
      		duration : 200,
      		width : '100%',
      		height : 'auto'
		}, options);		
	
		return this.each(function(){			
			var $this = $(this).addClass('flipcatalog');
				
				
				$this.find('>div').each(function(){
				
					var $slide = $('<div class="fc-slide"></div>'),
						$fore = $(this).clone().addClass('fc-inner-fore'),
						$shine = $('<div class="fc-shine"></div>');
					$(this).addClass('fc-inner-back').wrap($slide).after($shine).before($fore).wrap('<div class="fc-mask"></div>');
					
				});
				
			var width = 0,
				current = 0,
				currentMov = 0,
				$slides = $this.find('.fc-slide').css('z-index','8'),
				$masks = $this.find('.fc-mask'),
				$fores = $this.find('.fc-inner-fore'),
				$backs = $this.find('.fc-inner-back'),
				$shines = $this.find('.fc-shine'),
				
				setPosition = function(posXpx,percent){
					if(percent){
						var posX = posXpx;
					}else{
						var posX = 100 * posXpx/width;
					}
					var dx = 0.5*(100 - posX);
						
					
					$fores.eq(currentMov).css('left',posX+'%');					
					$shines.eq(currentMov).css('left',posX+dx+'%');
					
					if(posX == 0){dx = 0;}
					$backs.eq(currentMov).css('left',-posX-dx+'%');
					$masks.eq(currentMov).css('left',posX+dx+'%');
					
							
				},
				showLeft = function(){
					setPosition(95,true);
				}
			
			//Start
			width = $this.width();
			setPosition(0);
			$slides.eq(currentMov).css('z-index','9');	
			++currentMov;
			$slides.eq(currentMov).css('z-index','10');
			
			$this.mouseover(function(ev){
				if((ev.pageX - $this.offset().left)>(width/2)){
					showLeft();
				}
			});
		});
	};
})(jQuery);