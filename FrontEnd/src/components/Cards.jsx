import React from 'react'

const Cards = ({item}) => {
    // console.log(item)
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card dark:bg-slate-900 dark:text-white bg-base-100 w-74  hover:scale-105 duration-200 shadow-xl dark:border">
            <figure>
                <img 
                src={item.image}
                alt="Shoes" />
            </figure> 
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${item.price}</div>
                  <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 hover:p-3 cursor-pointer border-black">Buy Now</div>
                </div>
            </div>
        </div>
      </div>  
    </>
  ) 
}

export default Cards
