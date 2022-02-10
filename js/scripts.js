var visible = false

$('.green-container').on('click', function () {
	if (visible === false) {
  	$('#cote-menu').fadeOut()
    visible = true
  } else {
  	$('#cote-menu').fadeIn()
    visible = false
  }
})
