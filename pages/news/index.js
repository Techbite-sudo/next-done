export default function NewsArticlesList({ articles }) {
    return(
        <div>
            <h1>List of News Articles</h1>
            {articles.map((article) => {
                return(
                    <div key={article.id}>
                        <h1>{article.id} {article.title} | {article.category}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    console.log(data)
    return{
        props: {
            articles: data
        }
    }
}