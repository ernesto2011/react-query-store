import { Product, productsApi } from "..";

interface Options{
    filterKey?: string;

}
export const sleep = (seconds: number=0):Promise<boolean> =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(true);
        },  seconds*1000)
    });
}
export const getProducts = async({filterKey}:Options):Promise<Product[]>=>{
    const filterURL = filterKey ? `/products?category=${filterKey}`:`/products`
    const {data} = await productsApi.get<Product[]>(filterURL);
    return data
}
export const getProductById = async(id:number):Promise<Product> =>{
    const {data} = await productsApi.get<Product>(`/products/${id}`);
    return data
}

export interface ProductLike {
    id?:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}
export const createProduct = async(product:ProductLike)=>{ 
    await sleep(5)
    const {data} = await productsApi.post<Product>('/products', product)
    return data
}