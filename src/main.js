import './app.css'
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    userFullName: 'carnet-biblioteca'
  }
});

export default app;
