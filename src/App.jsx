import { useEffect, useRef, useState } from "react"
import { Input } from "./components/forms/input"


function App() {

    const ref = useRef()
    
    console.log('Application', ref)

    return <div>
        <Input inputRef={ref} label="prefix" />
    </div>
}

export default App