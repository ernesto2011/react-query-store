import { useParams } from "react-router-dom"
import { ProductCard, useProduct } from ".."

export const ProductById = () => {
    const {id} = useParams()
    const {isLoading, product} = useProduct({
        productId: +id!
    })
  return (
    <div className="flex-col">
        <div className="text-2xl font-bold">
            {
                isLoading && <p>Cargando...</p>
            }
            {
                product&&(<ProductCard product={product} fullDescription={true}/>)
            }
            
        </div>
    </div>
  )
}
