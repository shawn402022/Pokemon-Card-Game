
let pokemon1 = {}
let pokemon2 = {}

// Get First PokeMon
function getPokemonOne(){
    // Pick a random Pokemon
    const pokemonOne = pokemonGroup[Math.floor(Math.random() * pokemonGroup.length)]
    console.log(pokemonOne)
}

// Get Second PokeMon
function getPokemonTwo() {
    // Pick a random Pokemon
    const pokemonTwo = pokemonGroup[Math.floor(Math.random() * pokemonGroup.length)]
    console.log(pokemonTwo)
}




// Get Pokemom1 
async function getPoke1() {
    num = Math.floor(Math.random() * 1000 )

    const apiUrl1 = `https://pokeapi.co/api/v2/pokemon/${num}`

    try{
        const response = await fetch(apiUrl1);
        const data = await response.json();
        poke1 = data
        pokemon1.id = poke1.id
        pokemon1.name = poke1.name
        pokemon1.base_experience = poke1.base_experience
        pokemon1.sprites = poke1.sprites
        
        console.log(poke1)
        return poke1
        
    } catch (error) {
        console.log('no pokemon', error)
    }
}

// Get Pokemom2
async function getPoke2() {
    num = Math.floor(Math.random() * 1000 )

    const apiUrl2 = `https://pokeapi.co/api/v2/pokemon/${num}`

    try{
        const response = await fetch(apiUrl2);
        const data = await response.json();
        poke2 = data
        pokemon2.id = poke2.id
        pokemon2.name = poke2.name
        pokemon2.base_experience = poke2.base_experience
        pokemon2.sprites = poke2.sprites
        
        console.log(poke2)
        return poke2
        
    } catch (error) {
        console.log('no pokemon', error)
    }
}



// On Load
getPoke1()
getPoke2()
console.log(pokemon1)
console.log(pokemon2)