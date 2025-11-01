import { NextRequest, NextResponse } from "next/server"
import posts from "../../data/posts.json"
import {writeFile} from "fs/promises"
import path from "path"

const filePath = path.join(process.cwd(), "app", "data", "posts.json")

export async function POST(req: NextRequest){
    try{
        const novoPost = await req.json();

        if(!novoPost.slug || !novoPost.titulo || !novoPost.resumo || !novoPost.conteudo){
            return NextResponse.json({
                error: "Campos obrigatórios faltando"}, 
                {status: 400})
        }

        posts.push(novoPost)

        await writeFile(filePath, JSON.stringify(posts, null, 2))

        return NextResponse.json(novoPost, {status: 201})
    } catch (err){
        console.error("Erro ao criar post:", err);
        return NextResponse.json({error: "Erro ao criar post"}, {status:500})
    }
}

export async function GET() {
  return NextResponse.json(posts);
}