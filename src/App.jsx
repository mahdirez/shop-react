import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="box-border">
        <Header />
        <Main />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
