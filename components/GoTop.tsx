import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import upArrow from '../asset/up-arrow.svg';

const GoTop = () => {
    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    return (
        <button aria-label="Back to the top" onClick={handleScrollUp} className={`btn btn-outline inline-block p-4 pr-20 flex w-24`}>
            <div className="absolute z-10 right-5">
                <Image src={upArrow} height={40} alt="Up arrow" />
            </div>
        </button >
    )
}

export default GoTop;