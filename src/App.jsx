import { useDocumentTitle } from "./hooks/useDocumentTitle"
import { useFetch } from "./hooks/useFetch"
import { useIncrement } from "./hooks/useIncrement"
/**Exemple d'utilisation de hook personalisé */

function App() {
    /**Appel de la fonction hook personalisée */

    const {loading,data,errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')
    return <>
         {loading && <div>En cours de chargement.....</div>}
         {errors && <div>{errors.toString()}</div>}
         {data && <div>
            <ul>
                {data.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>
         </div>}

    
    </>

}

export default App