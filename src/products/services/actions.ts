import { Product, productsApi } from "..";

interface Options{
    filterKey?: string;

}
const sleep = (seconds: number=0):Promise<boolean> =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(true);
        },  seconds*1000)
    });
}
export const getProducts = async({filterKey}:Options):Promise<Product[]>=>{
    await sleep(2)
    const filterURL = filterKey ? `/products?category=${filterKey}`:`/products`
    const {data} = await productsApi.get<Product[]>(filterURL);
    return data
}
export const getProductById = async(id:number):Promise<Product> =>{
    const {data} = await productsApi.get<Product>(`/products/${id}`);
    return data
}