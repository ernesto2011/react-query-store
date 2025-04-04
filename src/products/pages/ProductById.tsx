import { useParams } from "react-router-dom"
import { ProductCard, useProduct } from ".."
import { useEffect } from "react"

export const ProductById = () => {
    const {id} = useParams()
    const {isLoading, product} = useProduct({
        productId: +id!
    })
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <div className="flex-col">
        <div className="text-2xl font-bold">
            {
                isLoading && <p>Cargando...</p>
            }
            {
                product&&(<ProductCard product={product} fullDescription/>)
            }
            
        </div>
    </div>
  )
}
