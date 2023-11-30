import { useState } from "react"

/**
 * soit une fonction useIncrement va nous renvoyer un tableau de taille 3 dont 
    1ere valeur le compteur, 2eme valeur la fonction d'incrémentation et 3eme valeur la fonction de desincrement
 */

export function useToggle(initial = false) {
    const [state, setState] = useState(initial)
    const toggle = () => setState(v => !v)
    return [state,toggle]
}