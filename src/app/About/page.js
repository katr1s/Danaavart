import "@/app/About/about.css";
import Navigation from "@/components/navigation";
import Texture from "@/components/texture";


export default function About() {
  return (
    <div className="about">
      <div className="content">
        <Navigation />

        <div className="information">
          <div className="infographic">
            <h1>Acerca de mi</h1>
            <p>
              Mi nombre es Danna Valenzuela, soy una persona apasionada y
              enfocada al arte, me gusta ver el mundo lleno de colores y
              posibilidades, soy dibujante autodidacta y estoy dispuesta a
              seguir aprendiendo cada día más.
            </p>

            <div className="habilities">
              <h2>Habilidades</h2>
              <div className="icons">
                <img
                  src="/Icons/sketchbook-svgrepo-com.svg"
                  alt="sketchbook"
                  title="sketchbook"
                />
                <img
                  src="/Icons/adobe-photoshop-svgrepo-com.svg"
                  alt="Adobe Photoshop"
                  title="Adobe Photoshop"
                />
              </div>
            </div>
          </div>

          <div className="photo">
            <img
              src="/Foto.jpg"
              alt="Danna Valenzuela"
              title="Danna Valenzuela"
            />
            <div className="socialNetwork">
              <a
                href="https://www.behance.net/dannavalenzuela5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Icons/bxl-behance.svg"
                  alt="Behance"
                  title="Behance"
                />
              </a>

              <a
                href="https://www.instagram.com/danvaart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Icons/bxl-instagram.svg"
                  alt="Instagram"
                  title="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Texture />
    </div>
  );
}
