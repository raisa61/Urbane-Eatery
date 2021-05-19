//navbar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //on mouse over animation
  $(document).ready(function(){
    var pos = 0;
    $('.parent').bind('mouseover',function(){
        pos = $(this).data('pos');
        $(this).next('div').find('.img').eq(pos%2).show();
        $(this).hide();
        pos++;
        $(this).data('pos',pos);
    });
    $('.img').bind('mouseout',function(){
        $(this).hide();
        $('.parent').show();

    });
});