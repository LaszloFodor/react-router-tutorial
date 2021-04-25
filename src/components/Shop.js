import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    )
    const items = await data.json()
    setItems(items.data)
  }

  return (
    <div className='App'>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Shop
