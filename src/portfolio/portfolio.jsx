
import React, { useState } from 'react'
const UseStateComp = () = 
const [count, setCount] = useState(0)
let btnadd="add"
let binminus="minus"
let bine
et-"reset"
const Add = () → { setCount (count +1)
const Minus = ( =>
• {
setCount ( count -1)
const Reset = ()
= {
setCount 19)
return ( ‹div>
<div className='text-red-400'>{count}</div>
‹br />
‹button onClick={Add}>{btnaddl</button>
‹button onClick=(Minus}>(btnminus,</button>
‹button onClick=(Reset}>(btnreset)</button>
</div>
export default portfolio