import { useState } from 'react'
import './App.css'

function App() {

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleImage = (e) => {

    const file = e.target.files[0]

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const uploadImage = async () => {

    if (!image) return

    setLoading(true)

    const formData = new FormData()
    formData.append('image', image)

    try {

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      setResults(data.detections)
      setPreview(data.image)
    } catch (error) {

      console.error(error)
    }

    setLoading(false)
  }

  return (

    <div className="container">

      <h1>IA Visión Computacional</h1>

      <p>
        Sube una imagen porfa y deja que la Inteligencia artificial haga su magía.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {
        preview && (
          <img
            src={preview}
            alt="preview"
            className="preview"
          />
        )
      }

      <br />

      <button onClick={uploadImage}>
        Analizar imagen
      </button>

      {
        loading && <h2>Procesando...</h2>
      }

      <div className="results">

        {
          results.map((item, index) => (

            <div key={index} className="card">

              <h3>{item.object}</h3>

              <p>
                {item.confidence}%
              </p>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default App