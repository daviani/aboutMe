type CardProps = {
  url: string,
  img: string,
  title: string,
  subTitle: string,
}

const Card = ({ url, img, title, subTitle }: CardProps) => {
  const itemPicture = (itemImg: string) => {
    const imgSrc = itemImg || 'https://via.placeholder.com/50'
    return <img className="rounded-2xl " src={imgSrc} alt="logo"/>
  }

  return (
   <a href={url} target={title} >
     <div className="mx-auto z-10">
       <div className="flex flex-col">
         <div className="bg-blue-50 dark:bg-blue-800 shadow-lg rounded-3xl p-4 m-4">
           <div className="flex-none sm:flex">
             <div className=" relative h-16 w-16 sm:mb-0 mb-3">
               {itemPicture(img)}
             </div>
             <div className="flex-auto sm:ml-5 justify-evenly">
               <div className="flex items-center justify-between sm:mt-2">
                 <div className="flex items-center">
                   <div className="flex flex-col">
                     <div className="w-full flex-none text-lg text-blue-800 dark:text-blue-100 font-bold leading-none">
                       {title}
                     </div>
                   </div>
                 </div>
               </div>
               <div className="flex pt-2  text-sm text-gray-400">
                 <div className="flex-1 inline-flex items-center">
                   <p className="">
                     {subTitle}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </a>

  // <a href={url} target={title}
  //    className='flex flex-col m-4 p-8 bg-blue-50 dark:bg-blue-800 rounded-2xl shadow hover:shadow-md'
  // >
  //     <div className='flex items-center'>
  //          {itemPicture(img)}
  //          <div className='flex flex-col ml-4'>
  //              <div className='font-medium text-blue-800 dark:text-blue-100 leading-none'>
  //                  {title}
  //              </div>
  //              <p className='text-sm text-blue-700 dark:text-blue-200 leading-none mt-1'>
  //                 {subTitle}
  //              </p>
  //             </div>
  //         </div>
  // </a>

)
}

export default Card