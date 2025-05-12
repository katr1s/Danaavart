import "@/app/home.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Danaavart() {
  return (
    <>
      <div className="hero">
        <div className="background">
          <img src="/pexels-steve-1266808.webp" alt="background" />
        </div>

        <div className="content">
          <Navbar/>

          <div className="ilustration">
            <h1>Ilustración</h1>
            <img src="/1000000444-removebg-preview.png" alt="" />
          </div>

          <footer>
            <a href="https://www.instagram.com/danvaart/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/115/b307d21905088173.670c84517ff7a.jpg"
                alt="Danaavart"
              />
              <div className="inf">
                <h3>Danvaart</h3>
                <p>Instagram</p>
              </div>
            </a>

            <div className="app">
              <img src="/Icons/sketchbook-svgrepo-com.svg" alt="Sketchbook" title="Sketchbook" />
              <img
                src="/Icons/adobe-photoshop-svgrepo-com.svg"
                alt="Adobe Photoshop"
                title="Adobe Photoshop"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
