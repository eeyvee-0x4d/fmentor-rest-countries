import {
    useEffect
} from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const CardLoadingSkeleton = () => {

    return(
        <div className='bg-white dark:bg-dark-blue rounded shadow-lg overflow-hidden'>
            <div 
                className='relative h-[100px] bg-slate-200 dark:bg-slate-600 mb-4 animate-pulse'
            ></div>
            <div className='flex flex-col gap-2 p-4'>
                <div className='h-[15px] bg-slate-200 dark:bg-slate-600 rounded animate-pulse'></div>
                <div className='h-[15px] bg-slate-200 dark:bg-slate-600 rounded animate-pulse'></div>
                <div className='h-[15px] bg-slate-200 dark:bg-slate-600 rounded animate-pulse'></div>
            </div>
        </div>
    )
}

export default CardLoadingSkeleton