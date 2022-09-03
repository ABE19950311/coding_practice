
export const Item = (props:any)=>{
    console.log("test");
        let d = new Date(Date.parse(props.value.created));
        let f = `${d.getMonth()}/${d.getDate()}/${d.getHours()}/${d.getMinutes()}}`

        return(
            <tr>
                <th>No.{props.index}</th>
                <td>{props.value.message}</td>
                <td>{f}</td>
            </tr>
        )
}