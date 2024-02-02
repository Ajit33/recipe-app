import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function Globalstate({ children }) {
    const [searchParams,setSearchParmas]=useState('');
    const[loading,setLoading]=useState(false)
    const [recipeList,setRecipeList]=useState([])


   const handelSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
      try {
        const res=await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
        const data=await res.json();
        console.log(data);
        if(data?.data?.recipes){
          setRecipeList(data);
          setLoading(false)
          setSearchParmas('')
        }

      } catch (error) {
        console.log(error)
        setLoading(false)
        setSearchParmas('')
      }
   }

  return( <GlobalContext.Provider value={{searchParams,setSearchParmas,handelSubmit,setRecipeList,recipeList,loading}}>
    {children}
    </GlobalContext.Provider>
  );
}
