const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      starships: [],
      planets: [],
    },
    actions: {
      getCharacter: () => {
        fetch("https://swapi.dev/api/people")
          .then((resp) => resp.json())
          .then((characters) => {
            setStore({ characters: characters.results });
          });
      },

	  getStarships: () => {
        fetch("https://swapi.dev/api/starships")
          .then((resp) => resp.json())
          .then((starships) => {
            setStore({ starships: starships.results });
          });
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((planets) => {
            setStore({ planets: planets.results });
          });
      }
    },
  };
};

export default getState;
