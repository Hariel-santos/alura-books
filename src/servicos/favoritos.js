import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"});

async function getLivros() {
    const response = await favoritosAPI.get("/")

    return response.data;
}

export {
    getFavoritos
};