import "./App.css";
import {Footer} from "./Modules/Footer"
import {Header} from "./Modules/Header"
import {MainContent} from "./Modules/Main"
import {ProductSection} from "./Modules/ProductSection"
import {FAQ} from "./Modules/FAQ"


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
