import { render, screen } from '@testing-library/react'
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

  const category = 'One Punch'
  
  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isloading: true
    
    })
    render(<GifGrid category={ category } />)
    // screen.debug()
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))

  })

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Saitama' 
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Goku'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isloading: false
    
    })

    render(<GifGrid category={ category } />)
    // screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
    
  })
})
