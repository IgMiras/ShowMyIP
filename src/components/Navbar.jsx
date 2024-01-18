const Navbar = () => {
    return (
        <div className='bg-gradient-to-b from-[#3b0764] from-85% to-[#2e1065] flex justify-around items-center h-24 mx-auto'>
            <h1 className='text-4xl font-serif font-bold text-[#22c55e]'>SHOW MY IP</h1>
            <div className="hidden sm:inline">
                <h1 className="text-3xl font-serif font-bold text-[#22c55e]">Made by </h1>
                <a className="text-3xl font-serif font-bold text-[#e11d48] 
                    hover:text-[#831843] hover:underline hover:cursor-pointer"
                    href='https://github.com/IgMiras/' target="_blank"
                >
                    IgMiras
                </a>
            </div>
        </div>
    )
}

export default Navbar