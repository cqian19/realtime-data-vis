import React, { FC } from "react";
import Product, { IProduct } from "./Product";

interface IProps {
    products: IProduct[]
}

const ProductList: FC<IProps> = (props: IProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    );
};

export default ProductList;
