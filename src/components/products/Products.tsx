import Product from "../product/Product";

import {FC, useEffect, useState} from "react";
import {IProductProps} from "../../interfaces/IProductProps";

const Products: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            })
    }, []);

    return (
        <div>
            {
                products
                    .map(
                        (value: IProductProps) => (
                            <Product key={value.id}
                                     id={value.id}
                                     title={value.title}
                                     price={value.price}
                                     rating={value.rating}
                                     brand={value.brand}
                                     category={value.category}
                                     description={value.description}
                                     images={value.images}
                            />))
            }

        </div>
    )
}

export default Products;