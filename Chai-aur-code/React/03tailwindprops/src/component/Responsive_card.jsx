import React from 'react'
import Profile from '/assets/profile.jpg'

function Responsive_card({username = 'VV', qoute = 'Coding meets creativity every day.', role = 'Web devloper', location = 'Tamil Nadu'}) {
return (
    <div className='my-4'>
        <figure className='bg-slate-100 rounded-xl p-8 dark:bg-slate-800'>
            <img
                className='w-24 h-24 rounded-full mx-auto object-cover'
                src={Profile}
                alt='Profile'
                width='384'
                height='512'
            />
            <div className='pt-6 text-center space-y-4'>
                <blockquote>
                    <p className='text-lg font-medium'>
                        {qoute}
                    </p>
                </blockquote>
                <figcaption className='font-medium'>
                    <div className='text-sky-500 dark:text-sky-400'>
                        {username}
                    </div>
                    <div className='text-slate-700 dark:text-slate-500'>
                        {role}, {location}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
)
}

export default Responsive_card