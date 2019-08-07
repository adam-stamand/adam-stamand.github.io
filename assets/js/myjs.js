$(document).ready(function(){
  $('.geopattern').each(function(){
    $(this).geopattern($(this).data('pattern-id'));
  });
});

function toggleForked(){
  if ($('.fork-switch').prop('checked')) {
    $('div[id=forked]').removeClass('hidden');
  } else {
    $('div[id=forked]').addClass('hidden');
  }
}

function copyToClipboard(text){
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


$("#success").click(function () {
  $(".notify").toggleClass("active");
  $("#notifyType").toggleClass("success");
  
  setTimeout(function(){
    $(".notify").removeClass("active");
    $("#notifyType").removeClass("success");
  },2000);
});
