export default function ProductList({ products }){
    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => {
                return(
                    <div key={product.id}>
                        <h1>{product.id} {product.title} {product.price}</h1>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
export async function getStaticProps(){
    console.log('Generating/Regenerating Product List')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    
    return{
        props: {
            products: data
        },
        revalidate: 10
    }

}
