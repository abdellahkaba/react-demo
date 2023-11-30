import { useState } from "react";

export function useIncrement({base = 0, min = -Infinity, max = Infinity}) {
   
    const [value,setvalue] = useState(base)
    /**Un tableau d'objet */ 
    return {
            Compteur: value,
            increment: () => setvalue(v => v < max ? v+1 : v),
            desincrement: () => setvalue(v => v > min ? v-1 : v)
        }

        
}