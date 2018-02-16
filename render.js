var base_tpl =
  '<!DOCTYPE html>\n' +
  '<html>\n\t' +
  '<head>\n\t\t' +
  '<meta charset=\"utf-8\">\n\t\t' +
  '<title>Playground</title>\n\n\t\t\n\t' +
  '</head>\n\t' +
  '<body>\n\t\n\t' +
  '</body>\n' +
  '</html>'

var prepareSource = function () {
  var html = html_editor.value,
      css = css_editor.value,
      js = js_editor.value,
      src = ''

  src = base_tpl.replace('</body>', html + '</body>')

  css = '<style>' + css + '</style>'
  src = src.replace('</head>', css + '</head>')

  js = '<script>' + js + '</script>'
  src = src.replace('</body>', js + '</body>')

  return src
}

// // For HTML
// iframe_doc.body.innerHTML = code_for_body;
// // or
// var old_body = iframe_doc.body;
// var new_body = document.createElement('body');
// new_body.innerHTML = html_code;
// old_body.parentNode.replaceChild(new_body, old_body);
//
// // For CSS
// var style = document.createElement('style');
// style.innerHTML = css_code;
// iframe_doc.head.appendChild(style);
//
// // For JS
// var script = document.createElement('script');
// script.innerHTML = js_code;
// iframe_doc.body.appendChild(script);


var render = function () {
  var source = prepareSource()

  var iframe = document.querySelector('#output iframe')
      iframe_document = iframe.contentDocument

  iframe_document.open()
  iframe_document.write(source)
  iframe_document.close()
}
