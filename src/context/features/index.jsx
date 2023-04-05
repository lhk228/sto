import { createContext, useReducer} from "react";
import {reducer} from './reducer'

const FeaturesContext = createContext()

const FeaturesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
  <FeaturesContext.Provider value={[state, dispatch]}>
    {children}
  </FeaturesContext.Provider>
  )
};

export default FeaturesProvider;