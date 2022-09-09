pegaPokemon(32);
function pegaPokemon(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response=>response.json())
    .then(allpokemon=>{
    
    var pokemons=[];

    allpokemon.results.map((val)=>{
        

        fetch(val.url).then(response=>response.json()).then(pokemonSingle=>{
            pokemons.push({nome:val.name, imagem: pokemonSingle.sprites.front_default});
    
        if(pokemons.length==quantidade){
           var pokemonBoxes = document.querySelector('.pokemon-boxes');
            pokemonBoxes.innerHTML='';
            pokemons.map(function(val){
            pokemonBoxes.innerHTML+=`
                <div class="pokemon-box">
                <p>`+val.nome+`</p>
                <img src="`+val.imagem+`">
                </div>`
            })
            
        }
    })

    })

    pokemons.map((val)=>{
        console.log(val.nome);
    })

})
}

// setTimeout(() => {
//     var pesquisaPokemon = document.querySelector('input[name=pesquisa]');

// }, 5000);
