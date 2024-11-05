import Item from "../Item/Item"
import { getProducts } from "../../Data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap">
                    {products.map((prod) =>(
                        <div className="w-[250px] h-[250px] my-[120px]">
                            <Item {...prod}  key={prod.id}/>o
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}