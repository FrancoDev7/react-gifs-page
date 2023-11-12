import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {  

  const { images, isloading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isloading && (<p>Loading...</p>)
      }
      <div className="card-grid">
        {images.map((image) => (
         <GifItem 
            key={image.id} 
            {...image}
            />
        ))}
      </div>
  

    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}


