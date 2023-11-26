import { useState } from 'react'
import { Input } from './components/forms/input'
import { CheckBox } from './components/forms/checkbox'
import { ProductCategoryRow } from './components/products/productCategoryRow'
import { ProductRow } from './components/products/productRow'


const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]
console.log(PRODUCTS)
console.log(PRODUCTS[3].name)

function App() {

  const [showStockedOnly,setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  /**Une constante qui permet de filtrer les produits */
  const visibleProducts = PRODUCTS.filter(product =>{
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.includes(search)) {
      return false
    }

    return true
  })
return (
  <>
    <div className='container my-3'>
        <SearcheBar 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} 
        search={search}
        onSearchChange={setSearch}
        />
        <ProductTable products={visibleProducts}></ProductTable>
    </div>
  </>
)
}

function SearcheBar({showStockedOnly,onStockedOnlyChange,search,onSearchChange}) {
  return <div>
    <div className='mb-3'>
      <Input 
      value={search} 
      onChange={onSearchChange} 
      placeholder="Rechercher..." />
      <input type='range' className='form-range' min={0} max={10} />
      <Input 
      value={search} 
      onChange={onSearchChange} 
      placeholder="Nom de Kaba Abdoulaye..." />
      <CheckBox 
        id="stocked" 
        checked={showStockedOnly}  
        onChange={onStockedOnlyChange} 
        label="N'affichez que les elements du produits" />
    </div>
  </div>
}

/**
 * Un composant qui va regrouper tous les autres composants
 * cette fonction va recevoir la liste des produits
 */
function ProductTable({products}) {

    /**un tableau qui va contenir les composants */
    const row = []
    /**une variable qui prendra la precedente category */
    let lastCategory = null
    for(let product of products) {
      if(product.category !== lastCategory) {

        /**Lorsqu'on on utilise un tableau les élements doivent avoir les clé (key) */
        row.push(<ProductCategoryRow key={product.category} name={product.category} />)
      }

      lastCategory = product.category
      row.push(<ProductRow product={product} key={product.name} />)
    }
    
    return <>
        <table className='table'>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </table>
    </>
}

export default App


