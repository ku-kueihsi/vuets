import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class App extends Vue {
  //data
  name: string = "max";
  counter: number = 0;

  //computed
  get message(): string {
    return this.name + ' ' + this.counter;
  }

  //methods
  add(event: Event) {
    this.counter += 1;
  }
}

var app = new App({ el: "#app" });