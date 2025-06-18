import "./App.css";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
function App() {
  return (
    <div>
      <Header />
      <h2>Hero Card estilo Netflix:</h2>


      <div className="hero-card">
        <div
          className="hero-image"
          style={{
            backgroundImage: "url('https://i.imgur.com/O6qVFFp.png')",
          }}
        ></div>
        <div className="hero-info">
          <h3>THE THING</h3>
          <p>BENJAMIN BEN GRIMM</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
