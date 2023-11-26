/**
 * Ligne des prouduits dans un tableau de deux colones (name/price)
 * @param {{name: string, stocked: boolean, price: string}} product 
 * @returns 
 */

export function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: 'red'}
    return <>
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
         

        </tr>
    </>
}