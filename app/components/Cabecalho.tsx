import Link from "next/link"

export default function Cabecalho(){
    return (
        <header style = {{background: "#222", color:"#fff", padding:"1rem"}}>
            <h2>Meu blog</h2>
            <nav className = "space-x-4">
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    );
}