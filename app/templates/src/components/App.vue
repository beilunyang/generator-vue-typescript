<template>
  <div>
    <input v-model="msg" />
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    props: {
      propMessage: String,
    },
  })
  export default class App extends Vue {
    propMessage: string;

    msg: number = 123;

    helloMsg: string = 'hello, world!';

    mounted() {
      this.greet();
    }

    get computedMsg() {
      return 'computed' + this.msg;
    }

    greet() {
      alert('greeting:' + this.msg);
    }

  };
</script>
