/**
 * FUTURIPSUM Google Chrome Extension
 * Coded using Rapid PHP 2011 11.2
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


Clipboard = {};
Clipboard.createTextArea = function(value)
{
  var txt = document.createElement('textarea');
  txt.style.position = "absolute";
  txt.style.left = "-100%";
  if (value !== null)  txt.value = value;
  document.body.appendChild(txt);
  window.copied = txt.value.length;
  return txt;
}

Clipboard.copy = function(data)
{
  if (data === null) return;
  var txt = Clipboard.createTextArea(data);
  txt.select();
  document.execCommand('Copy');
  document.body.removeChild(txt);
}
