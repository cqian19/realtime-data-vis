import Product, { IProduct } from './Product'

interface IProps {
    products: IProduct[]
}

export default function ProductList(props: IProps) {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}
