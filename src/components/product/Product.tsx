import {FC} from "react";
import styles from "./Product.module.css";

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating: number,
    stock?: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode };
const Product: FC<IProductTypeProps> = ({
                                            id,
                                            title,
                                            description,
                                            price,
                                            rating,
                                            brand,
                                            category,
                                            images
                                        }) => {
    return (
        <div>
            <h2>{title} {price}$</h2>
            <div>category: {category}</div>
            <div>brand: {brand}</div>
            <div>rating: {rating}</div>
            <div>
                {
                    images?.map((image, index) => <img className={styles.image} key={index} src={image}
                                                       alt={title}></img>)
                }
            </div>
            <div>{description}</div>
        </div>
    );
};

export default Product;