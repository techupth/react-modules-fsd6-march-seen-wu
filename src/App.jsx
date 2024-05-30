import "./App.css";
import { Header } from "./components/header";
import { FAQ } from "./components/faq";
import { MainContent } from "./components/mainContent";
import { ProductSection } from "./components/productSection"
import {Footer} from "./components/footer"

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
