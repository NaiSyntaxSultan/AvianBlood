import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white h-[72px] border-t border-[#B1CCFF] flex items-center 
    justify-between px-34 text-gray-400 text-sm'>
        
        <div className='flex items-center gap-1.5'>
            <Copyright size={16} strokeWidth={1.5} />
            <p>2025 AvianBlood. All rights reserved.</p>
        </div>

        <p className='hidden sm:block'>
            Prediction results are for educational purposes only.
        </p>
    </div>
  )
}

export default Footer