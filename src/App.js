import { Characters, Header, Footer } from './components';
import './App.css';
import { useState } from 'react';
import { getCharacters } from './components/characters/characterList';

const App = () => {
  const orders = ["Név", "Kor"];
  const [currentOrder, setCurrentOrder] = useState(orders[0]);
  const characters = getCharacters(currentOrder);

  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 58px)"
        }}
      >
        <Header
          orders={orders}
          characterCount={characters.length}
          currentOrder={currentOrder}
          setOrder={setCurrentOrder}
        />
        <Characters characters={characters} />
      </div>
      <Footer />
    </>
  );
}

export default App;