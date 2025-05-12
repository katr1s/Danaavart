import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">
        Danvaart
      </Link>

      <div className="section">
        <Link href="/About">Acerca</Link>
        <Link href="/Work">Trabajos</Link>
      </div>
    </nav>
  );
}
