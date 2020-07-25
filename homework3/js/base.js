var a = 0;
var b=0;

$('.hukidasi_usa').hide();
$('.bk').hide();
$('.bkg').hide();
$('.hukidasi_gusa').hide();

$('#img1').fadeIn(1000);
$('#img2').fadeIn(1000);
$('#img3').fadeIn(1000);

$('.usazone').click(function(){
  if(a==0){
    $('.hukidasi_usa').show(1000);
    $('.bk').show(1000);
      a = 1;

  }
  else{
    $('.hukidasi_usa').hide(1000);
    $('.bk').hide(1000);
      a = 0;

  }
});

$('.gusazone').click(function(){
  if(b==0){
    $('.hukidasi_gusa').show(1000);
        $('.bkg').show(1000);
    b = 1;
  }
  else{
    $('.hukidasi_gusa').hide(1000);
        $('.bkg').hide(1000);
    b = 0;
  }
});
