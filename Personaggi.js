function animate() {
  if($('.default').hasClass('open')) {
    $('.default').removeClass('open');
    $('.default').addClass('close');
  } else {
    $('.default').removeClass('close');
    $('.default').addClass('open');
  }
}

function animateOnKeyUp(e) {
    if(e.key === 'a') {
      animate();
    }
}

$('.default').click(animate);
$(window).keyup(animateOnKeyUp);