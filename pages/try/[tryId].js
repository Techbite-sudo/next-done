import Head from "next/head"


export default function TryHead({ title, description }){
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>Try Head</h1>
        </div>
    )
}

export async function getServerSideProps(){
    return{
        props: {
            title: "Try Head",
            description: "Try decsription"
        }
    }
}