// Scroll Top
// $('.top').click(function() {
//   $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
// });
// $(window).scroll(function() {
//   if ($(this).scrollTop() > $(window).height()) {
//     $('.top').addClass("up");
//   } else {
//     $('.top').removeClass("up");
//   }
// });


/** Used to toggle forked repos on project page */
function toggleForked(){
  if ($('.fork-switch').prop('checked')) {
    $('div[id=forked]').removeClass('hidden');
  } else {
    $('div[id=forked]').addClass('hidden');
  }
}

/** Copy text to clipboard */
function copyToClipboard(text){
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


/** Success banner when email is copied to clipboard */
$("#success").click(function () {
  $(".notify").toggleClass("active");
  $("#notifyType").toggleClass("success");
  
  setTimeout(function(){
    $(".notify").removeClass("active");
    $("#notifyType").removeClass("success");
  },2000);
});

/** Initialize the Appear On Scroll tool */
AOS.init({
  offset: 40,
  duration: 700,
  easing: 'ease-in-out-cubic',
  delay: 15,
  disable: 'mobile',
  once: true,
});


/** Query for all hamburger buttons and attach event listeners */
(function() {
  var hamburgers = document.querySelectorAll(".hamburger");
  var hamburger = {
      navToggle: document.querySelector('.hamburger'),
      nav: document.querySelector('.hamburger-menu'),

      doToggle: function(e) {
          e.preventDefault();
          this.navToggle.classList.toggle('is-active');
          this.nav.classList.toggle('expanded');
      }
  };

  hamburger.navToggle.addEventListener('click', function(e) { 
      hamburger.doToggle(e);
    });

}());

