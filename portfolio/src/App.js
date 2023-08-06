import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <main className='h-screen bg-gradient-to-b from-slate-600 to-slate-700'>
      <Navbar />
      <Footer />
    </main>
  );
}

export default App;
