
import axios from "axios"
import Item from "./components/item"
import { useEffect, useState } from "react"
function App() {

  const [arr,setArr]=useState([])
  const [index,setIndex]=useState(0)
  const [isLoading,setIsLoading]=useState(false)
  
  useEffect(()=>{
    if(localStorage.dark=="true")
      document.documentElement.classList.add("dark")
  })
  const search=(evt)=>
  {
    evt.preventDefault()
    const inp=document.getElementById("popy").value
    setIsLoading(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`).then((res)=>
    {
      setArr(res.data.meals)
      setIndex(0)
      setIsLoading(false)
    })
    
  }
  const toggleTheme=(evt)=>{
    localStorage.dark=localStorage.dark=="true" ? false : true
    document.documentElement.classList.toggle("dark")
  }
  return (
    <>
      <div className="flex items-center align-middle flex-col p-4 gap-10">
        <div className="p-4">
          <input type="text" id="popy" autoComplete="off" className="border-b-2  border-gray-800 font-mono w-80 m-3 p-2 bg-transparent outline-none dark:text-rose-100 text-xl"placeholder="Search.."/>
          <button className="border-cyan-300 border-2 bg-cyan-200 rounded-md hover:bg-cyan-300 dark:text-rose-100 dark:bg-gray-800 dark:border-gray-900 dark:hover:bg-gray-900 font-mono p-2" onClick={search}>Search</button>
          <span onClick={toggleTheme} className="scale-0 dark:scale-100 delay-100 material-symbols-outlined text-rose-300 hover:text-rose-400 cursor-default absolute sm:right-5 right-[2%] top-5 sm:text-3xl text-2xl duration-150 select-none">light_mode</span>
          <span onClick={toggleTheme} className="scale-100 dark:scale-0 delay-100 material-symbols-outlined text-rose-300 hover:text-rose-400 cursor-default absolute sm:right-5 right-[2%] top-5 [font-variation-settings:'FILL'1] sm:text-3xl text-2xl duration-150 select-none">dark_mode</span>
        </div>
        {
          isLoading && <div className="dark:text-rose-200">Loading..</div>}
        <div className="flex flex-row gap-8">
          {index!=0 && <button onClick={()=>setIndex(index=>index-1)}className="h-[60svh] "><span class="material-symbols-outlined text-cyan-600 text-3xl dark:text-gray-700">
              arrow_back_ios
            </span>
          </button>}
          {!isLoading &&  arr.slice(index,index+3)?.map((item)=><Item key={item.idMeal}img={item.strMealThumb} title={item.strMeal} desc={item.strInstructions}/>)}
          {index+3<arr.length && <button className="h-[60svh]  " onClick={()=>setIndex(index=>index+1)}><span class="material-symbols-outlined text-cyan-600 text-3xl dark:text-gray-700">
              arrow_forward_ios
            </span>
          </button>}
        </div>
      </div>
    </>
  )
}
export default App
