import { useEffect, useState } from "react"
import { Input } from "./components/forms/input"


function App() {

    const [duration,setDuration] = useState(5)
    /**une nouvelle constante qui permet de savoir ou on en est */
    const [secondLeft,setSecondLeft] = useState(duration)

    /**Nb
     * quant on utilise useEffect, il ne faut utiliser aucune variable de composant qui son en dehors du effect
     * si on utilise seulement setTime dans une fonction de useEffect passons à faire un nettoyage de cet timer
     * ne met jamais setFonction à la racine de useEffect
     */

    /** La solution c'est de créer un handler pour le changement de la valeur initiale de  */

    const handlerChange = (v) =>{
        setDuration(v)
        setSecondLeft(v)
    }

    console.log("Bien !")
    useEffect(() => {
        const timer = setInterval(() => {
            setSecondLeft(v => {
                if(v <=1) {
                    clearInterval(timer)
                    return 0
                }
                return v - 1
            })
        }, 1000)
        /**Nettoyer le precedent timer */
        return () => {
            clearInterval(timer)
        }
    }, [duration])

    return <>
        <div className="py-2">
            <Input 
            value={duration} 
            onChange={handlerChange} 
            placeholder="Saisir une valeur" />
        </div>

        <p>
            Decompte : {secondLeft}
        </p>
    </>
}

export default App