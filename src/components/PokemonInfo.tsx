import React, { useState, Suspense } from "react"
import { getPokemon } from "../utils/getPokemon"
import { IGetPokemonResponse, PokemonEnum } from "../utils/types"

interface GetPokemonInfoProps {
    pokemonName: keyof typeof PokemonEnum
}

interface PokemonCache {
    [pokemonName: string]: IGetPokemonResponse | null
}

const cache: PokemonCache = {}


function GetPokemonInfo({ pokemonName }: GetPokemonInfoProps) {

    const pokemon = cache[pokemonName]

    if (!pokemon) {
        const promise = getPokemon(PokemonEnum[pokemonName]).then(
            p => (cache[pokemonName] = p)
        )
        throw promise
    }

    return <pre>{JSON.stringify(pokemon || 'Unknow', null, 2)}</pre>
}

export function PokemonInfo() {

    const [pokemonName, setPokemonName] = useState<keyof typeof PokemonEnum | null>(null)

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            pokemonName: { value: string };
        };
        const _pokemonName = target.pokemonName.value;

        if (_pokemonName in PokemonEnum) {
            setPokemonName(_pokemonName as keyof typeof PokemonEnum)
        } else {
            setPokemonName(null)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
                <input id="pokemonName-input" name="pokemonName" />
                <button type="submit">Submit</button>
            </form>
            {
                pokemonName && 
                    <Suspense fallback={<span>loading ...</span>}>
                        <GetPokemonInfo pokemonName={pokemonName} /> 
                    </Suspense>
            }

        </div>
    )
}
