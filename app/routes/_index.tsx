import { redirect } from "@remix-run/node"

export const loader =()=>{
   
    return redirect("/dashboard")
}

export default function Auth() {
    return  null
  }
