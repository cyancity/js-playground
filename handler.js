var html_editor = document.querySelector('#html textarea')
    css_editor = document.querySelector('#css textarea')
    js_editor = document.querySelector('#js textarea')

var editors = [html_editor, css_editor, js_editor]

editors.forEach(function (editor, i, arr) {
  editor.addEventListener('keyup', function () {
    render()
  }, false)
})
