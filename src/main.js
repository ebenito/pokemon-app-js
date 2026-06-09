import { PokemonApp } from './pokemon/pokemon-app.js'
import './style.css'

document.querySelector('#app').innerHTML = `
<main>
  <h1 id="app-tittle">Hola mundo!</h1>
    <section class="information-card"></section>
</main>
`;

PokemonApp( document.querySelector('.information-card') )