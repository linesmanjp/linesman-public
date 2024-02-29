$(window).scroll ->
  if $(this).scrollTop() > 330
    $('#sp-header').addClass('white')
  else
    $('#sp-header').removeClass('white')
  return


$ ->
  state = false
  scrollpos = 0
  $('#menu-trigger').click ->
    scrollpos = $(window).scrollTop()
    $('body').addClass('locked').css 'top': -scrollpos
    $('#overray').fadeIn()
  $('#close-trigger').click ->
    $('body').removeClass('locked').css 'top': 0
    window.scrollTo 0, scrollpos
    $('#overray').fadeOut()
  return