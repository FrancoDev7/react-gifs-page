import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return

    // console.log(newCategory)
    setCategories([newCategory, ...categories])
   
  }

  return (
    <>
      {/* titulo */}
      <h2>GitExpertApp</h2>
      {/* INPUT */}
      <AddCategory  
        // setCategories ={ setCategories }
        onNewCategory ={ (value) => onAddCategory(value) }
       />
    
      {
        categories.map(( category ) => (
          <GifGrid 
            key={ category }
            category={ category }/>
          ))
      }
    </>
    
  )
}
