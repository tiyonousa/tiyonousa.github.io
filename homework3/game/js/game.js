$('.form').hide();
$('.hukidasi_usa').hide();
$('.bk').hide();
$('.hukidasi_gusa').hide();
$('.bkg').hide();

$('.hukidasi_usa').show(1000);
$('.bk').show(1000);
$('.hukidasi_gusa').show(1000);
$('.bkg').show(1000);

var y=Math.floor(Math.random() * 101);
var count=0;

function showgamezone() {
  $('.form').show();
  $('#start').hide();
  $('#menu').text("コンピューターが数字を決めました。下の欄に入力してください。");
}

function game(){

  if(y == number_form.number.value){
    $('#result').text('お見事!!!!!!!!　あなたは' + count + '回目で正解しました。');
    a=0;
  }
  else if(y < number_form.number.value){
    $('#result').text("正解の数より大きいです");
  }
  else{
    $('#result').text("正解の数より小さいです");
  }
  count++;
}
