import { useContext } from 'react'
import BebidasContext from '../context/BebidasProvider'

const useBebida = () => {
  return useContext(BebidasContext)
}

export default useBebida