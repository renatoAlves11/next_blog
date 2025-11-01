import Cabecalho from "../components/Cabecalho"
import posts from "../data/posts.json"
import Link from "next/link"

export default function PostsPage() {
  return (
    <>
      <Cabecalho />
      <main className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Posts</h2>
          <Link
            href="/posts/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Criar Novo Post
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border p-4 rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-bold">{post.titulo}</h3>
              <p className="text-gray-600">{post.resumo}</p>
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 underline"
              >
                Ler mais
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
