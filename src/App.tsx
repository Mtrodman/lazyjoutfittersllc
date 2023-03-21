import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'
import Footer from './component/Footer/footer'
import Navigation from './component/Navigation/navigation'
import About from './component/About/about'
import Contact from './component/Contact/contact'
import Lodging from './component/Lodging/lodging'
import Home from './component/Home/home'
import WhiteTailDeer from './component/WhitetailDeer/whitetaildeer'
import Turkey from './component/Turkey/turkey'
import Waterfowl from './component/Waterfowl/waterfowl'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navigation />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Lodging' element={<Lodging />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/WhiteTailDeer' element={<WhiteTailDeer />} />
            <Route path='/Turkey' element={<Turkey />} />
            <Route path='/Waterfowl' element={<Waterfowl />} />
           

          </Routes>
        
        </div>
      </Router>
   
      </>
      );

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Header/>
//       </header>
//       <body className="App-body">
//           <Welcome/>
//           <Guides/>
//           <Gallery/>
//       </body>
//       <footer className="App-footer">
//         <Footer/>
//       </footer>
//     </div>
//   );
// }
  }
export default App;
