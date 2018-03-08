<template>
  <div :id="type" ref="editor">
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['type'],
  mounted () {
    let editor = this.$refs.editor
    let defaultValue = {
      html: () => {
        return `<h1 class="demo">HelloWorld</h1>`
      },
      css: () => {
        return '.demo{color: cyan}'
      },
      javascript: () => {
        return 'console.log("HelloWorld")'
      }
    }
    editor.value = defaultValue[this.type]()

    var codeMirrorConfig = {
      mode: 'text/html',
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: {'Ctrl-Q': cm => {
        cm.foldCode(cm.getCursor())
      }},
      flodGutter: true,
      gutters: [
        'CodeMirror-linenumbers',
        'CodeMirror-foldGutter'
      ],
      keyMap: 'sublime',
      profile: 'xhtml'
    }

    var editorMode = {
      html: () => 'text/html',
      css: () => 'css',
      javascript: () => 'javascript'
    }

    codeMirrorConfig.mode = editorMode[this.type]()

    window['editor_' + this.type] = CodeMirror.fromTextArea(editor, codeMirrorConfig)

    emmetCodeMirror(window['editor_' + this.type], {
      'Tab': 'emmet.expand_abbreviation_with_tab',
      'Cmd-Alt-B': 'emmet.balance_outward'
    })

    window['editor_' + this.type].setOption('theme', 'dracula')

    window['editor_' + this.type].on('change', () => {
      that.render()
    })
  },
  methods: {
    render () {
      let baseTpl = `
      <!doctype html>
      <html>
      <head>
      <meta charset="utf8">
      <title>Playground</title>
      </head>
      <body>
      </body>
      </html>
      `

      let sourceCode = () => {
        let html = window.editor_html.getValue()
        let css = window.editor_css.getValue()
        let javascript = window.editor_javascript.getValue()
        let src = ''

        /**
         * get outer css and js value
         */
        let cssInputVal = document.querySelector('#out-css').value
        let jsInputVal = document.querySelector('#out-js').value

        /**
         * parse outer link to html element
         */
        let outerCss = `<link rel="stylesheet" href="${cssInputVal}">`
        let outerJs = `<script src="${jsInputVal}"><\/script>`

        /**
         * parse the source code you write to html element
         */

        javascript = '<script>' + javascript + '<\/script>'

        /**
         * replace elements to html
         */
        src = src.replace('</head>', css + outerCss + '</head>')
        src = baseTpl.replace('</body>', html + '</body>')
        src = src.replace('</body>', javascript + outerJs + '</body>')

        return src
      }

      let render = () => {
        let source = sourceCode()
        let iframe = document.querySelector('#output iframe')

        let iframeDocument = iframe.contentDocument
        iframeDocument.open()
        iframeDocument.write(source)
        iframeDocument.close()
      }

      render()
    }
  }
}
</script>

<style>
</style>
