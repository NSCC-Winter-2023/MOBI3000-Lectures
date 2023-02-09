import {createContext, useState} from "react";

export const NameContext = createContext(null);

function NameProvider({children}) {
  const [name, setName] = useState("default");
  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;