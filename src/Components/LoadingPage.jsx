

export default function Loading(){
    return(
        <>
        
    <div className='flex bg-gray-900 space-x-2 justify-center items-center  h-screen dark:invert'>
	<span className='sr-only'>Loading...</span>
	<div className='h-5 w-5 bg-cyan-500 rounded-full animate-bounce  [animation-delay:-0.1s]'></div>
	<div className='h-5 w-5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.1s]'></div>
	<div className='h-5 w-5 bg-cyan-500 rounded-full animate-bounce'></div>
</div>
        </>
    )
}