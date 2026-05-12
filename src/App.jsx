import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const companies = [
    "Microsoft", "Amazon Web Services", "Google Cloud", "Oracle",
    "IBM", "Intel", "Salesforce", "Mercado Libre",
    "Softtek", "Wizeline", "KIO Networks", "Globant"
  ]

  const facts = [
    "Tu celular, tus apps, los videojuegos, la nube y la IA existen porque alguien los diseñó.",
    "El salario promedio de un ingeniero en sistemas junior en méxico va desde los 18,000$ hasta las 32,000$",
    "La IA no piensa como humano: aprende patrones a partir de datos.",
    "Un ingeniero en sistemas puede trabajar en IA, videojuegos, apps, ciberseguridad, nube, ciencia de datos y automatización.",
    "Muchas empresas tecnológicas permiten trabajar remoto para clientes de México, Estados Unidos y otros países."
  ]

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setResults([])
  }

  const uploadImage = async () => {
    if (!image) return

    setLoading(true)

  const formData = new FormData()
  formData.append('image', image)

  const response = await fetch('https://ia-vision-backend.onrender.com/predict', {
  method: 'POST',
  body: formData
})

if (!response.ok) {
  const errorText = await response.text()
  console.error('Error del backend:', errorText)
  alert('El backend respondió con error. Revisa Render Logs.')
  setLoading(false)
  return
}

const data = await response.json()

setResults(data.detections)
// setPreview(data.image)


    setLoading(false)
  }

  return (
    <div className="page">

      <section className="hero">
        <div className="hero-content">
          <span className="badge">Ingeniería en Sistemas y tecnologías de información</span>
          <div>
          </div>

          <h1>IA Vision Computacional</h1>

          <p>
            Sube una imagen y deja que una inteligencia artificial detecte objetos en segundos.
          </p>

          <div className="hero-buttons">
            <a href="#demo" className="primary-btn">Probar la IA</a>
            <a href="#career" className="secondary-btn">¿Por qué estudiar Sistemas?</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="scanner"></div>
          <h2>¿Te gustaría crear tecnología como esta?</h2>
          <p>
            Apps, inteligencia artificial, videojuegos, sistemas empresariales, ciberseguridad y nube.
          </p>
        </div>
      </section>

      <section id="demo" className="demo-section">
        <div className="section-header">
          <h2>Prueba la IA</h2>
          <p>Sube una foto y observa cómo el sistema detecta objetos.</p>
        </div>

        <div className="demo-grid">
          <div className="upload-panel">
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <button onClick={uploadImage}>
              {loading ? 'Procesando...' : 'Analizar imagen'}
            </button>

            <p className="hint">
              Tip: prueba con una foto donde aparezcan personas, carros, celulares, botellas o mochilas.
            </p>
          </div>

          <div className="image-panel">
            {
              preview ? (
                <img src={preview} alt="preview" className="preview" />
              ) : (
                <div className="empty-preview">
                  Aquí aparecerá tu imagen analizada
                </div>
              )
            }
          </div>
        </div>

        <div className="results">
          {
            results.map((item, index) => (
              <div key={index} className="result-card">
                <h3>{item.object}</h3>
                <p>{item.confidence}% de confianza</p>
              </div>
            ))
          }
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
          <p>La carrera conecta con empresas de software, nube, IA, datos, fintech y tecnología empresarial.</p>
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

      <section className="call-section">
        <h2>¿Te gustaría hacer tecnología desde tu casa y que te paguen por resolver problemas reales?</h2>
        <p>
          Ingeniería en Sistemas puede ser tu entrada al mundo de la inteligencia artificial,
          el desarrollo de software, la nube y la innovación.
        </p>
      </section>

    </div>
  )
}

export default App