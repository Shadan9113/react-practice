import React, { useMemo, useState } from 'react'

function Memo1() {
const [searchItem,setSearchItem] = useState("")
const [items] = useState([
    "Apple",
    "Banana",
    "Grapes",
    "Strawberry",
    "Guava",
    "Watermelon"
])

const FilterItem = useMemo(()=>{
    return items.filter((item)=>
        item.toLowerCase().includes(searchItem.toLowerCase())
    )
},[searchItem, items])
  return (
    <div>
        <input type="text" placeholder='search items...' 
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
        />
        <ul>
            {FilterItem.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Memo1