import {useState} from "react"
export default function useOnlineStatus(){
const [onlinestatus,setOnlineStatus]=useState(true)

window.addEventListener("online",()=>
setOnlineStatus(true))
window.addEventListener("offline",()=>setOnlineStatus(false))

  return onlinestatus  
}