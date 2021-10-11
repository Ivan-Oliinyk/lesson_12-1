// const r = fetch("https://pokeapi.co/api/v2/pokemon/{2}");
// console.log(r);

// fetch("https://pokeapi.co/api/v2/pokemon/2").then((data) => {
//   console.log(data);
// });

// fetch("https://pokeapi.co/api/v2/pokemon/2").then((height) => {
//   console.log(height);
// });

// fetch("https://pokeapi.co/api/v2/pokemon/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

///////////////////////////////////////////////////////////////////////
import "./style.css";
import pokemonCardTpl from "./templates/pokemon-card.hbs";

const refs = {
  cardContainer: document.querySelector(".js-card-contrainer"),
  searchForm: document.querySelector(".js-search-form"),
};

refs.searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.query.value;

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch((error) => {
      console.log("this is CATCH");
      console.log(error);
    })
    .finally(() => {
      form.reset();
    });
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    (response) => {
      return response.json();
    }
  );
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
