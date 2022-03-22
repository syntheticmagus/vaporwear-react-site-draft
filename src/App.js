import './App.css';
import Filler from './components/Filler';
import Footer from './components/Footer';
import Header from './components/Header';
import Byline from './components/old/Byline';
import Headline from './components/old/Headline';
import Spacer from './components/Spacer';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Byline text="Precision luxury timepiece mastercrafted by artisans who have been to Switzerland." textPosition="left" />
      <Byline text="Firm yet flexible pseudo-rigid watch band clasps with embedded rare earth magnets, ending forever the need for clasp geometry." textPosition="right" />
      <Byline text="Custom-machined screens for a near-frictionless surface with subatomic smoothness." textPosition="left" />
      <Byline text="Quantum metamaterial construction bends gravity waves for levitation in all virtual exhibitions and certain breezes." textPosition="right" />
      <Spacer height={100} />
      <h1>Customization: coming soon!</h1>
      <Spacer height={100} />
      <Footer />
    </div>
  );
}

export default App;
