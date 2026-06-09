const pokemonCache = new Map();


/**
 * Fetch Pokemon information by ID from the PokeAPI.
 * @param { number } id 
 * @returns { Promise<object> } Pokemon information
 */
export const getPokemonById = async ( id ) => {
    if ( pokemonCache.has( id ) ) {
        console.log(`getPokemonById: Pokemon con ID ${ id } recuperdado de la cache.`);
        return pokemonCache.get( id );
    }
    else
        console.log('getPokemonById trayendo el Pokemon con ID:', id);


    //Forma moderna con async/await
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        if ( !response.ok ) throw new Error(`No se pudo obtener el Pokemon con ID ${ id }: ${ response.statusText }`);
        const data = await response.json();
        // console.log('Datos del Pokemon recibidos:', data);
        const PokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
        }
        console.log('Datos del Pokemon recibidos:', PokemonData);

        pokemonCache.set( id, PokemonData );
        return PokemonData;
    }
    catch ( error ) {
        console.error('Error al obtener el Pokemon:', error);
    }



    // Forma tradicional con promesas
    // fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
    //     .then( response => {
    //         if ( !response.ok ) throw new Error(`No se pudo obtener el Pokemon con ID ${ id }: ${ response.statusText }`);
    //         return response.json();
    //     })
    //     .then( data => {
    //         console.log('Datos del Pokemon recibidos:', data);
    //     })
    //     .catch( error => {
    //         console.error('Error al obtener el Pokemon:', error);
    //     });
        

    return {};
}
