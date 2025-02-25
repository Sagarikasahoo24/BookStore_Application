import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course({item}) {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-3xl'>We're delighted to have you <span className='text-pink-600'>Here! :)</span></h1>
                    <p className='mt-12 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat id, animi magnam accusantium earum adipisci placeat tempore mollitia odit ipsam repellat eaque, obcaecati praesentium omnis, libero incidunt nostrum? Aliquid?
                        Magni sequi dolore provident sit totam repudiandae accusamus facilis repellat assumenda cupiditate maiores laborum placeat voluptatibus, nam, itaque aliquid recusandae quia eum consequuntur. Quas, cupiditate maxime consectetur fugiat sunt nesciunt.
                    </p>
                    <Link to='/'>
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {list.map((item) => (
                        <Cards key={item.id} item={item} />
                    )                      
                    )}
                </div>
            </div>
        </>
    )
}

export default Course
