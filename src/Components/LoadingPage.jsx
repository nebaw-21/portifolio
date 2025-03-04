

export default function Loading(){
    return(
        <>
        
    <div className='flex bg-gray-900 space-x-2 justify-center items-center  h-screen dark:invert'>
	<span className='sr-only'>Loading...</span>
	<div className=' md:h-5 md:w-5 h-4 w-4 bg-cyan-500 rounded-full animate-bounce  [animation-delay:-0.1s]'></div>
	<div className='md:h-5 md:w-5  h-4 w-4 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.1s]'></div>
	<div className='md:h-5 md:w-5  h-4 w-4 bg-cyan-500 rounded-full animate-bounce'></div>
</div>
        </>
    )
}