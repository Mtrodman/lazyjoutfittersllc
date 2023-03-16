import Welcome from '../Welcome/welcome'
import Header from '../Header/header'
import Guides from '../Guides/hunts'
import Gallery from '../Gallery/gallery'
import Footer from '../Footer/footer'
import '../../App.css';


function Home() {
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

export default Home;

