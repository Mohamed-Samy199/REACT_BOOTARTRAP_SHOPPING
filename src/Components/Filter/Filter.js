import React, { useState } from 'react'

const Filter = ({filteration}) => {
    const [filter , setFilter] = useState("")

    const filterHandelar=(e)=>{
        const type = e.target.value
        setFilter(type)
        filteration(type)
    }
    return (
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">choise color</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="whiet light black yellow blue" value={filter} onChange={filterHandelar}/>
        </div>
    )
}

export default Filter
