import { Header, Footer, ProductList, IProduct } from "../components";

interface IIndexProps {
    products: IProduct[]
}

function Index(props: IIndexProps) {
    return (
        <div className="app">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="OTE3ZGNjZjUtZjE1Yy00NmY1LThiMGUtZTI4OGFiNDU4MmNkNjM3NDIwNTM2MTk1NzY1Mjc3" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </head>
            <Header />
            <main className="main">
                <ProductList products={props.products} />
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            products:[
                {id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "/halfmoon.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct,
            ]
        }
    }
}

export default Index;