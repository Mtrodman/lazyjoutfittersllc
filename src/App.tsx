
import Welcome from './component/Welcome/welcome'
import Header from './component/Header/header'
import Guides from './component/Guides/hunts'
import Gallery from './component/Gallery/gallery'
import Footer from './component/Footer/footer'

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      <body className="App-body">
          <Welcome/>
          <Guides/>
          <Gallery/>
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
