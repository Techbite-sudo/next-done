export default function ArticlesListByCategory({ articles }){
    return(
        <div>
            <h1>Articles by Category</h1>
            {articles.map((article) => {
                return(
                    <div key={article.id}>
                        <h1>{article.id} {article.title} | {article.category}</h1>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
} 

export async function getServerSideProps(context){
    // const {params, req, res, query} = context
    const {params} = context
    // conslole.log(query)
    // console.log(req.headers.cookie)
    // res.setHeader('Set-Cookie', ['Boniface'])
    const{category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}