import { Characters, Header, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 78px)"
        }}
      >
        <Header />
        <Characters />
      </div>
      <Footer />
    </>
  );
}

export default App;