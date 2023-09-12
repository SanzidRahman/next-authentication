import { navData } from '@/lib/bd'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[5rem] w-full bg-emerald-700 flex justify-evenly items-center'>
        {
            navData.map((nav)=> (
                <ul>
                    <li>
                        <Link href={nav.hash}>{nav.name}</Link>
                    </li>     
                </ul>
            ))
        }
    </div>
  )
}

export default Navbar