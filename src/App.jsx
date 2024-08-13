import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="wrapper">
    <Header />

      <section className="section-top">
        <img src="src\img\hero-mobile.png" className="img-top" />
        <div className="orange-box">
          <h1>Discover the<br></br>Perfect Fireplace ...</h1>
          <p className="consultation">Book consultation: <span className="mobile">01213456789</span></p>
        </div>
      </section>

      <section className="section-middle">
        <h2>How it works.</h2>
        <div className="card">
          <img src="src\img\how-it-works-1.png" />
          <h3>Give us a call ...</h3>
          <p>
            Call us and book in a "Design Consultation" a date and time to suit
            you.
          </p>
        </div>

        <div className="card">
          <img src="src\img\how-it-works-2.png" />
          <h3>We come to you ...</h3>
          <p>
            We come to your home to do an assessment of the space and to your
            style preference.
          </p>
        </div>

        <div className="card">
          <img src="src\img\how-it-works-3.png" />
          <h3>We recommend ...</h3>
          <p>We send you a bespoke set of fireplace recommendations.</p>
        </div>
      </section>

      <footer className="section-bottom">
        <div className="footer-left">
          <span>Find us on:</span>
          <span>Facebook</span>
          <span>|</span>
          <span>Instagram</span>
          <span>|</span>
          <span>Ticktok</span>
        </div>
        <div className="footer-right">
          <span>© Fireplace palace</span>
          <span><u>info@firepalace.co.uk</u></span>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
