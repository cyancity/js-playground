<template>
  <div id="app">
    <div class="link">
      <h3>Outer Javascript</h3>
      <input id="out-js" type="text" name="javascript" placeholder="outer javascript file">
    </div>

    <div class="link">
      <h3>Outer Css</h3>
      <input id="out-css" type="text" name="css" placeholder="outer css file">
    </div>

    <section>
      <div class="html">
        <h3>Html</h3>
        <editor type="html"></editor>
      </div>
      <div class="css">
        <h3>Css</h3>
        <editor type="css"></editor>
      </div>
      <div class="javascript">
        <h3>JavaScript</h3>
        <editor type="javascript"></editor>
      </div>
      <div class="output" id="output">
        <h3>Output</h3>
        <iframe></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  name: 'App',
  components: {
    Editor
  },
  mounted () {
    console.log('HelloWorld')
  }
}
</script>

<style>
.html, .css, .javascript, .output {
  display: inline-block;
  width: 50%;
  margin: -2px;
}

.output iframe {
  height: 300px;
  width: 100%;
}

.link {
  display: inline-block;
  margin-left: 40px;
}
</style>
