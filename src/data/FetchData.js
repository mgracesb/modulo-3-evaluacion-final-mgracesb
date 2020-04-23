const baseURL = "https://rickandmortyapi.com/api/character/";
const fetchData = () => fetch(baseURL).then((response) => response.json());

export default fetchData;
