import Navbar from "./components/Navbar"
import IPInfos from "./components/IPInfos"
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps'
import { useState, useRef, useEffect } from "react"


const App = () => {
  const mapElement = useRef()
  const [mapLongitude, setMapLongitude] = useState(0)
  const [mapLatitude, setMapLatitude] = useState(0)
  const [mapZoom, setMapZoom] = useState(13)
  const [map, setMap] = useState({})

  useEffect(() => {
    let map = tt.map({
      key: 'itH5JL3iSUKfcpYTMX1VSSMjaxduVfmV',
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    })
    console.log(mapLongitude, mapLatitude)
    setMap(map)
    return () => map.remove()
  }, [mapLatitude, mapLongitude])

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen max-w-[1240px] mx-auto">
        <div className='flex justify-around items-center flex-col bg-slate-900 h-full w-full border-solid border-2 border-[#22c55e] text-light-gray'>
          <IPInfos 
            setMapLongitude={setMapLongitude}
            setMapLatitude={setMapLatitude}  
          />
          <div ref={mapElement} className="mapDiv h-4/6 w-10/12"></div>
        </div>
      </div>
    </>
  )
}

export default App