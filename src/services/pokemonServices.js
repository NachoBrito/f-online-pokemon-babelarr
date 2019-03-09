const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25';

const getPokemons = () => fetch(ENDPOINT).then(response => response.json());

export { getPokemons };