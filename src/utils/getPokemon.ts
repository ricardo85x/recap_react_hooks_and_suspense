import { IGetPokemonResponse } from "./types";

export const getPokemon = async (name: string) : Promise<IGetPokemonResponse> => {

    const queryPokemon = `
        query($pokemon: PokemonEnum!) {
            getPokemon(pokemon: $pokemon) {
                key
                num
                types
                abilities { first second hidden }
                baseStats { hp attack defense specialattack specialdefense speed }
            }
        }
    `;

    return window
        .fetch('https://graphqlpokemon.favware.tech/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: queryPokemon,
                variables: { pokemon: name }
            })
        })
        .then(r => r.json())
}