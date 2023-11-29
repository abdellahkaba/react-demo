import { useToggle } from "./hooks/useToggle"
/**Exemple d'utilisation de hook personalisé */

function App() {
    /**Appel de la fonction hook personalisée */
    const [checked, toggleCheck] = useToggle()
    return <>
         <div className="text-center w-2 py-2">
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        { checked && 'Je suis coché'}
    </div>

}

export default App