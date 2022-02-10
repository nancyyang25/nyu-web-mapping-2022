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

$('#perse-menu').on('click', function() {
	$(".should-be-centered").html("<img src='https://upload.wikimedia.org/wikipedia/en/9/94/Sublime_Self-Titled.jpg'/>");
})
