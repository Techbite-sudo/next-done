export default function Newsp({ data }){
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}
export async function getStaticProps(context){
    return{
        props: {
            data: context.preview? "List of draft Articles" : "List of Published Articles",  
        }
    }
}
