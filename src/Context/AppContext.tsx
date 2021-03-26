import { createContext } from 'react'
import AppContextType from '../Models/AppContext'

export const defaultAppContextValue: AppContextType = {
  view: 'clientArea'
}
export const AppContext = createContext(defaultAppContextValue)
