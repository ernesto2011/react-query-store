import { useQuery } from "@tanstack/react-query"
import { productActions } from "..";

interface Options{
    productId:number;
}
export const useProduct = ({productId}:Options) => {
    const {isError, isLoading, error, data:product, isFetching} = useQuery({
        queryKey: ['product', productId],
         queryFn: () => productActions.getProductById(productId),
         staleTime: 1000 * 60 * 60
       });
  return{
    isError, isLoading, error, product, isFetching
  }
}
