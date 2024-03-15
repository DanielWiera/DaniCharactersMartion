import { Characters, Header, Footer } from './components';
import './App.css';
import { useState } from 'react';

const App = () => {
  const orders = ["Név", "Kor"];
  const [currentOrder, setCurrentOrder] = useState(orders[0]);

  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 58px)"
        }}
      >
        <Header
          orders={orders}
          currentOrder={currentOrder}
          setOrder={setCurrentOrder}
        />
        <Characters order={currentOrder} />
      </div>
      <Footer />
    </>
  );
}

export default App;