import Navbar from "./components/Navbar"
import IPInfos from "./components/IPInfos"


const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen max-w-[1240px] mx-auto">
        <div className='flex justify-center items-center bg-slate-900 h-4/6 w-full border-solid border-2 border-[#22c55e] text-light-gray'>
          <IPInfos />
        </div>
      </div>
    </>
  )
}

export default App