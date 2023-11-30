import { useState } from "react";

export function useDocumentTitle(name) {

    const [title,setName] = useState(name)

    const titleName = () => setName(n)

    return [title,titleName]
}