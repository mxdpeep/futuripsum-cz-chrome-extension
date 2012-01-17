/**
 * FUTURIPSUM Google Chrome Extension
 * Coded using Rapid PHP 2011 11.2
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


var prefs =
{
  appTitle: 'FUTURIPSUM',
  lang: 'CZ',
  tabURL: 'futuripsum.html?counter=',
  minParagraphs: 3,
  colorClick: [255, 0, 0, 0],
  colorReset: [0, 0, 200, 150],
  timeout: 1000,
  notificationTimeout: 3000,
  regex: "[\\?&]counter=([^&#]*)",
  title: '<h1 style="text-align:center">FUTURIPSUM CZ</h1><a target="Futurama" href="http://www.imdb.com/title/tt0149460/" class="title"><img alt="FUTURIPSUM" src="futuripsum.128.png" border="0"></a>',
  copyText: ' bytes zkopírováno',
  tooltip: 'kopírovat do schránky',
}
