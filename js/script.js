//<Function для расширения контейнера>=======================================================================================================
$(window).resize(function(event) {
   mainblock();
});
function mainblock(){
   var h=$(window).outerHeight();
   $('.mainblock').css('min-height',h);
}
   mainblock();
//</Function для расширения контейнера>=======================================================================================================

/*//<ZOOM>=======================================================================================================
if($('.gallery').length>0){
   baguetteBox.run('.gallery',{
      //custom options
   });
}
//*
/*
function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
*/
$('.filter__item').click(function(event) {
   var i=$(this).data('filter'); 
   if (i==1) {
      $('.portfolio__column').show();  // Показать все картинки
   } else{
      $('.portfolio__column').hide();  // Иначе скрыть их
      $('.portfolio__column.f_'+i).show(); // Показать только portfolio__column.f_+i
   }
   $('.filter__item').removeClass('active'); //у всех отключаем класс active
   $(this).addClass('active'); // у нажатой кнопки включаем active

   return false;
});