import { useState } from "react";

export function useIncrement(initial = 0) {
   
    const [value,setvalue] = useState(initial)
    /**Un tableau simple */
    return [
        value,
        function increment() {
            setvalue(v => v+1)
        }
         ,
        function desincrement() {
            setvalue(v => v-1)
        }
    ]
}