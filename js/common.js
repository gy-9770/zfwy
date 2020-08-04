function change() {

  var cliWid = document.documentElement.clientWidth

  var font = cliWid / 320 * 100 + 'px'

  document.querySelector('html').style.fontSize = font

}
change()
window.onresize = change;