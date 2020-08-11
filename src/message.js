import React from 'react'
function Message({value,morning}){
return(
    <div>
        <h3>Good {morning?"Morning":"Night"}</h3>
        <p>Value of Counter is = {value}</p>
    </div>
)
}
export default Message;