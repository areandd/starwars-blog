const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],

		},
		actions: {
			
			getCharacter: () => {
				
				fetch('https://swapi.dev/api/people')	
				.then(resp => resp.json())
				.then(data => { 
					setStore({characters: data.results})
				})
			},
		}
	};
};

export default getState;
