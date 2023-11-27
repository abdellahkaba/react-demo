/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 * @returns 
 */

// import { forwardRef, useId } from "react"

export function Input({placeholder, value, onChange}) {
    return <>
        <div>
            <input type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                />
        </div>
    </>
}

// export const Input = forwardRef(function Input({placeholder, value, onChange}, ref) {
//     const id = useId()
//     return <>
//     <div>
//         <input 
//             id={id}
//             ref={ref}
//             type="text"
//             className="form-control"
//             value={value}
//             placeholder={placeholder}
//             onChange={(e) => onChange(e.target.value)}
//             />
//     </div>
// </>
// })