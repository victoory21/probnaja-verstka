/*$(window).resize(function(event) {
   mainblock();
});
function mainblock(){
   var h=$(window).outerHeight();
   $('.mainblock').css('min-height',h);
}
   mainblock();
*/
//<ZOOM>=======================================================================================================
if($('.gallery').length>0){
   baguetteBox.run('.gallery',{
      //custom options
   });
}
//*

window.addEventListener('load', function() {
   baguetteBox.run('.gallery');
 });

function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}

$('.filter__item').click(function(event) {
   var i=$(this).data('filter');
   console.log(i);

   return false;
});