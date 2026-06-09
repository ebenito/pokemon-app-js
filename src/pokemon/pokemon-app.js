import { getPokemonById } from "./actions/get-pokemon.by-id.action.js";

/**
 * 
 * @param { HTMLDivElement } element
 */
export  const PokemonApp = async ( element ) => {
    let pokemonId = 1;

    document.title = 'Pokemon App';
    const titleElement = document.querySelector('#app-tittle');

    //if ( titleElement ) titleElement.innerText = 'Pokemon App';  // Forma tradicional
    titleElement && ( titleElement.innerText = 'Pokemon App' );    // Forma corta

    // console.log('PokemonApp called');
    // console.log( element );

    //! Crear un elemento para mostrar la información del Pokemon
    const loadingParagraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');
    const buttonsContainer = document.createElement('div');


    //! Configuraciones
    loadingParagraph.textContent = 'Cargando información del Pokemon...';
    nextBtn.textContent = 'Siguiente';
    prevBtn.textContent = 'Anterior';
    buttonsContainer.className = 'buttons-container';

    element.appendChild( loadingParagraph );
    element.appendChild( pokemonImage );
    
    buttonsContainer.appendChild( prevBtn );
    buttonsContainer.appendChild( nextBtn );
    element.appendChild( buttonsContainer );

    //! Listeners de los botones
    nextBtn.addEventListener('click', async () => {
        loadingParagraph.textContent = 'Cargando siguiente Pokemon...';

        pokemonId++;
        renderPokemon( await getPokemonById( pokemonId ) );
    });

    prevBtn.addEventListener('click', async () => {
        if ( pokemonId > 1 ) {
            loadingParagraph.textContent = 'Cargando Pokemon anterior...';
            
            pokemonId--; 
            renderPokemon( await getPokemonById( pokemonId ) );
        }
        else
            alert('No hay Pokemons anteriores al ID 1');
    });


    //! Renderizar la información del Pokemon
    const renderPokemon = ( pokemon ) => {
        loadingParagraph.textContent = `Pokemon: ${ pokemon.name } (ID: ${ pokemon.id })`;
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;
    }
   

    //! Hacer la petición para obtener los datos

    //Metodo moderno con async/await
    renderPokemon( await getPokemonById( pokemonId ) );

    // Metodo tradicional con promesas
    // getPokemonById( pokemonId )
    //     .then( pokemon=> {
    //         renderPokemon( pokemon );
    //     });



}