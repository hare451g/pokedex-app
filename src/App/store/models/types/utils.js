function transformResult(pokemonArray = []) {
  return pokemonArray.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.url.slice(0, -1).split('/').pop(),
    url: pokemon.url,
  }));
}

export { transformResult };
