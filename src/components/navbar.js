import Link from "next/link";


export default function Navbar(){
    return(
        <nav className="nav">
            <Link href="/" className="logo">
              Danvaart
            </Link>

            <div className="sections">
              <Link href="/About">Acerca</Link>
              <Link href="/Work">Trabajos</Link>
            </div>
          </nav>
    )
}