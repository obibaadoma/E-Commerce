import {cn} from "@/lib/utils"
import {ReactNode} from "react" 4.1k (gzipped: 1.8k)

const MaxWidthWrapper = ({
  className, 
  children}: 
  {
  className?: string
  children: ReactNode
}) => {
  return <div className = {cn(
    className='h-full nx-auto w-full max-w-screen-xl px-2.5 md:px-20' 

  )}>
    {children}
    </div>
}

export default MaxWidthWrapper