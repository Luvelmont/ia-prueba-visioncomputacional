import { useState } from 'react'
import './App.css'

const imagenesResultados = Object.values(
  import.meta.glob('./assets/Resultados/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)

function App() {
  const [showExample, setShowExample] = useState(false)

  const companies = [
    "Microsoft", "Amazon Web Services", "Google Cloud", "Oracle",
    "IBM", "Intel", "Salesforce", "Mercado Libre",
    "Softtek", "Wizeline", "KIO Networks", "Globant"
  ]

  const facts = [
    "Tu celular, tus apps, los videojuegos, la nube y la IA existen porque alguien los diseñó.",
    "El salario promedio de un ingeniero en sistemas junior en México puede ir desde $18,000 hasta $32,000 MXN mensuales.",
    "La IA no piensa como humano: aprende patrones a partir de datos.",
    "Un ingeniero en sistemas puede trabajar en IA, videojuegos, apps, ciberseguridad, nube, ciencia de datos y automatización.",
    "Muchas empresas tecnológicas permiten trabajar remoto para clientes de México, Estados Unidos y otros países."
  ]

  return (
    <div className="page">

      <section className="hero">
        <div className="hero-content">
          <span className="badge">Ingeniería en Sistemas y Tecnologías de Información</span>

          <h1>IA y Visión Computacional</h1>

          <p>
            Descubre cómo una computadora puede analizar imágenes, detectar objetos
            y transformar datos visuales en información útil.
          </p>

          <div className="hero-buttons">
            <a href="#example" className="primary-btn">Probar demo visual</a>
            <a href="#career" className="secondary-btn">¿Por qué estudiar Sistemas?</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="scanner"></div>
          <h2>¿Te gustaría crear tecnología como esta?</h2>
          <p>
            Apps, inteligencia artificial, videojuegos, sistemas empresariales,
            ciberseguridad, nube y ciencia de datos.
          </p>
        </div>
      </section>

      <section id="career" className="career-section">
        <div className="section-header">
          <h2>¿Qué puedes crear como Ingeniero en Sistemas?</h2>
          <p>No solo es programar: es diseñar soluciones reales con tecnología.</p>
        </div>

        <div className="career-grid">
          <div className="career-card">🤖 Inteligencia Artificial</div>
          <div className="career-card">🎮 Videojuegos</div>
          <div className="career-card">🛡️ Ciberseguridad</div>
          <div className="career-card">☁️ Cloud Computing</div>
          <div className="career-card">📱 Apps móviles</div>
          <div className="career-card">📊 Ciencia de datos</div>
        </div>
      </section>

      <section className="facts-section">
        <div className="section-header">
          <h2>Datos que deberían saber</h2>
        </div>

        <div className="facts-grid">
          {
            facts.map((fact, index) => (
              <div key={index} className="fact-card">
                <span>0{index + 1}</span>
                <p>{fact}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section className="companies-section">
        <div className="section-header">
          <h2>Empresas donde puede trabajar alguien de Sistemas</h2>
          <p>
            La carrera conecta con empresas de software, nube, IA, datos, fintech y tecnología empresarial.
          </p>
        </div>

        <div className="company-marquee">
          {
            companies.map((company, index) => (
              <div key={index} className="company-card">
                {company}
              </div>
            ))
          }
        </div>
      </section>

      <section id="example" className="example-section">
        <div className="section-header">
          <h2>Así funciona la visión computacional</h2>
          <p>
            Una IA analiza una imagen, identifica patrones y puede detectar objetos como personas,
            carros, celulares o mochilas.
          </p>
        </div>

        <div className="example-grid">
          <div className="example-card">
            <h3>Antes</h3>
            <img src="/messicristianoAntes.jpg" alt="Imagen antes del análisis" />
          </div>

          <div className="example-card">
            <h3>Después</h3>

            {
              showExample ? (
                <img src="/messicristianoDespues.png" alt="Imagen después del análisis" />
              ) : (
                <div className="hidden-result">
                  Presiona el botón para simular el análisis de IA
                </div>
              )
            }
          </div>
        </div>

        <button onClick={() => setShowExample(!showExample)}>
          {showExample ? 'Ocultar análisis' : 'Analizar imagen de ejemplo'}
        </button>
      </section>

      <section className="call-section">
        <h2>¿Te gustaría hacer tecnología desde tu casa y que te paguen por resolver problemas reales?</h2>
        <p>
          Ingeniería en Sistemas puede ser tu entrada al mundo de la inteligencia artificial,
          el desarrollo de software, la nube y la innovación.
        </p>
      </section>


    <section className="future-engineers-section">
      <div className="section-header">
        <h2>Imágenes de futuros ingenieros</h2>
        <p>
          Estas imagenes son las que subieron y fueron analizadas por visión computacional
        </p>
      </div>

      <div className="future-engineers-grid">
        {
          imagenesResultados.map((imagen, index) => (
            <div key={index} className="future-engineers-card">
              <img src={imagen} alt={`Resultado ${index + 1}`} />
            </div>
          ))
        }
      </div>
    </section>
    </div>
  )
}

export default App

// // https://ia-vision-backend.onrender.com/predict
//   // const response = await fetch('http://127.0.0.1:5000/predict'
//   const response = await fetch('https://ia-vision-backend.onrender.com/predict', {
//   method: 'POST',
//   body: formData
// })