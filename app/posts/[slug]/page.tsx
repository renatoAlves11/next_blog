import posts from "../../data/posts.json"
import Cabecalho from "../../components/Cabecalho"
import {notFound} from "next/navigation"


interface Props{
    params: {slug: string}
}

export default async function PostPage({params}: Props){
    const {slug} = await params

    const post = posts.find((p) => p.slug === slug)

    if(!post) return notFound()

    return (
        <>
            <Cabecalho/>
            <main className = "p-8">
                <h2 className = "text-3xl font-bold mb-4">{post.titulo}</h2>
                <p className = "whitespace-pre-line text-gray-800">{post.conteudo}</p>
            </main>
        </>
    )
}