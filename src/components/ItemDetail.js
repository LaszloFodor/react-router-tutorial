import React from 'react'
import { useState, useEffect } from 'react'

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({ data: { item: { images: {} } } })

  useEffect(() => {
    console.log(match)
    fetchItem()
  }, [])

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
    const item = await data.json()
    console.log(item)
    setItem(item)
  }

  return (
    <div className='App'>
      <h1>{item.data.item.name}</h1>
      <img src={item.data.item.images.information} alt='' />
    </div>
  )
}

export default ItemDetail
