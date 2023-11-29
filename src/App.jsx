import { useIncrement } from "./hooks/useIncrement"
/**Exemple d'utilisation de hook personalisé */

function App() {
    /**Appel de la fonction hook personalisée */
    const [value,increment,desincrement] = useIncrement(0)
    return <>
         <div className="text-center w-2 py-2 ">
         Compteur : {value}
         <button className="btn btn-primary m-2" onClick={increment}>Incrementation</button>
         <button className="btn btn-danger" onClick={desincrement}>Desincrementation</button>
    </div>
    
    </>

}

export default App