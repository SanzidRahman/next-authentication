import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";


export default function Home() {
  return (
   <div className="flex flex-col  justify-center items-center h-[14rem] translate-x-1/6  sm:w-8/12 sm:translate-x-1/4 mt-[8rem] rounded-xl">
   <h1 className="text-2xl text-black">WelCome to Our New World</h1>
        <LoginLink className="bg-blue-700 p-2 pl-4 pr-4 rounded-xl mt-4  hover:bg-slate-300 shadow-2xl border border-black">Sign in</LoginLink>
        <RegisterLink className="bg-blue-700 p-2 pl-4 pr-4 rounded-xl mt-3  hover:bg-slate-300 shadow-2xl border border-black">Sign up</RegisterLink>

   </div>
  )
}
 