import { useState } from "react"

const Searcinput=({onSearch})=>{
    const [input, setinput]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        onSearch(input)
    }
    return( 
        <form onSubmit={submitHandler}>
            <input  type="text" placeholder="Search a county" onChange={(e)=> setinput(e.target.value)}  value={input}/>
        </form>
        )
    
}
export default Searcinput