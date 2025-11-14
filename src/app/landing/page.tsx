import Card from '@/components/Cards/Card'
import React from 'react'

export default function page() {
    const rooms = [
        {
            name:"Mines",
            link:"/mine",
            background:"mine",
            desc:"Find gems, avoid bombs"
        },
        {
            name:"Jackpot",
            link:"/slide",
            background:"jackport",
            desc:"Spin the wheel of fortune"
        },
        {
            name:"Video Poker",
            link:"/videopoker",
            background:"poker",
            desc:"Classic casino poker"
        },
        {
            name:"Crash",
            link:"/crash",
            background:"crash",
            desc:"Cash out before it crashes"
        },
    ]
    return (
        <div className='bg-casino w-screen min-h-screen bg-center bg-cover bg-no-repeat'>
            <div className='w-full md:w-4/5 lg:w-2/3 xl:w-1/2 bg-black/60 backdrop-blur-sm min-h-screen relative flex flex-col items-center justify-center'>
                <div className='text-center mb-8 px-4'>
                    <h1 className='text-4xl md:text-5xl font-bold text-cozy-green mb-2'>
                        Choose Your Game
                    </h1>
                    <p className='text-white/80 text-lg'>
                        Provably fair games on Coreum blockchain
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-4 px-4'>
                    {rooms.map((room, idx)=>(
                        <Card {...room} key={idx} />
                    ))}
                </div>
                <div className='hidden bg-jackport bg-mine bg-poker bg-crash'></div>
            </div>
        </div>
    )
}
