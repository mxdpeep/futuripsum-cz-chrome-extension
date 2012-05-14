/**
 * Google Chrome Extension: FUTURIPSUM česky
 * Coded using Rapid PHP 2011 11.22
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


var prefs =
{
  lang: 'CZ',
  appTitle: 'FUTURIPSUM česky',
  tabURL: 'futuripsum.html?counter=',
  minParagraphs: 3,
  colorClick: [255, 0, 0, 0],
  colorReset: [0, 0, 200, 150],
  clickTimeout: 1000,
  notificationTimeout: 3000,
  regex: "[\\?&]counter=([^&#]*)",
  title: '<h1>FUTURIPSUM česky</h1><span class="bender"><a target="FUTURAMA" href="http://www.imdb.com/title/tt0149460/"><img alt="FUTURIPSUM" src="futuripsum.128.png" border="0"></a></span>',
  copyText: 'bajtů zkopírováno',
  tooltip: 'zkopírovat text do schránky',
}
