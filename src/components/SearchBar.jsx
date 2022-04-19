import { useState } from "react"

const SearchBar = (props) => {
    const [search, setSearch] = useState('')
    

    const handleInputChange = (e) => {
        setSearch(e.target.value)
      
    }

    const handleClearClick = () => {
        setSearch('')

    }

    const shouldDisplayButton = search.length > 0

    const filterProducts = props.products.filter((product) =>{
        return product.includes(search)
    })

    return (
        <div>
          <input type='text'  value={search} onChange={handleInputChange}/>
          {shouldDisplayButton &&  <button onClick={handleClearClick}>Clear</button>
           }
         <ul>
             {filterProducts.map((product)=> {
                 return  <li key={product}>{product}
                    </li>
             })}
         </ul>
        </div>

    )
}

export default SearchBar