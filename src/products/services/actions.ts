import { Product, productsApi } from "..";

interface Options{
    filterKey?: string;

}
export const getProducts = async({filterKey}:Options)=>{
    const filterURL = filterKey ? `/products?category=${filterKey}`:`/products`
    const {data} = await productsApi.get<Product[]>(filterURL);
    return data
}