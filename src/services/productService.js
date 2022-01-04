import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("https://localhost:44351/api/Member/getAll");
    }
    getProductById(id){
        return axios.get(`https://localhost:44351/api/Member/getById/${id}`);
    }
}