import logo from './logo.svg';
import './App.css';
import CountButton from './components/CountButton';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';



function App() {

  const [productsState, setProductsState] = useState([])

  // const products =[ 'tooth brush', 'mouth wasth', 'teeth', 'dental floss', 'mouth guard']

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
              const newProductsState = productsArray.map((product) => {
                  return product.title
              })
              setProductsState(newProductsState)
            })

  // setTimeout(() => {
  //   setProductsState(['tooth brush', 'mouth wasth', 'teeth', 'dental floss', 'mouth guard'])
  // },2000)
},[])

const hasProducts = productsState.length > 0;
  return (
    <div className="App">
      {hasProducts ?  <SearchBar products={productsState}/>: 'Loading...' }
     
      {/* <CountButton  increment={1}/>
      <CountButton increment={5} /> */}
    </div>
  );
}

export default App;
