/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 * @returns 
 */

import { forwardRef, useId } from "react"

// import { forwardRef, useId } from "react"

// export function Input({placeholder, value, label, onChange, inputRef,labelRef,divRef}) {
//     const id = useId()
//     console.log('input', inputRef)
//     console.log('label', labelRef)
//     console.log('div', divRef)
//     return <>
//         <div ref={divRef}>
//             <label ref={labelRef} className="form-label" htmlFor={id}>{label}</label>
//             <input type="text"
//                 ref={inputRef}
//                 className="form-control"
//                 value={value}
//                 placeholder={placeholder}
//                 onChange={(e) => onChange(e.target.value)}
//                 />
//         </div>
//     </>
// }

export const Input = forwardRef(function Input({placeholder, value, onChange,label}, ref) {
    const id = useId()
    return <>
    <div>
    <label className="form-label" htmlFor={id}>{label}</label>
        <input 
            id={id}
            ref={ref}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            />
    </div>
</>
})