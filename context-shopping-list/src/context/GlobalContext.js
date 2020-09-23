import React from 'react'
import ListsContextProvider from './ListsContextProvider'

const GlobalContext = ({children}) => {
  return (
    <ListsContextProvider>
      {children}
    </ListsContextProvider>
  )
}

export default GlobalContext
