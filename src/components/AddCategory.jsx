import { useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return 
    setInputValue('')
    onNewCategory( inputValue.trim() )
    
  }
  
  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

