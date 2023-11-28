import { useEffect, useRef, useState } from "react"
import { Input } from "./components/forms/input"


function App() {

    const ref = useRef(null)
    
    console.log('Application', ref)
    const [value,setValue] = useState('')
    return <div ref={ref}>
        <Input ref={ref}
         label="prefix"
         value={value}
         onChange={setValue}
         />
         {value.length === 0 && <div ref={ref}>hello</div>}
    </div>
}

export default App