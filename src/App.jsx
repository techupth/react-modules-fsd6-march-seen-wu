import "./App.css";
import { Header, MainContent, ProductSection, Footer } from "./components/content.jsx";
import { FAQ } from "./components/FAQ.jsx";

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
