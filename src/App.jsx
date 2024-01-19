import Navbar from "./components/Navbar"
import IPInfos from "./components/IPInfos"
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps'
import { useState, useRef, useEffect } from "react"
import Axios from 'axios'


const App = () => {
  const mapElement = useRef()
  const [mapLongitude, setMapLongitude] = useState(0)
  const [mapLatitude, setMapLatitude] = useState(0)
  const [mapZoom, setMapZoom] = useState(13)
  const [map, setMap] = useState({})
  const [ipInfos, setIpInfos] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await Axios.get('http://localhost:3001/')
        console.log('Vindo do localhost: ', response)
        const userIP = response.data.ip
        const infoResponse = await Axios.get(`https://ipapi.co/${userIP}/json`)
        console.log('Vindo de ipapi: ', infoResponse)
        setIpInfos(infoResponse.data)
        setMapLongitude(infoResponse.data.longitude)
        setMapLatitude(infoResponse.data.latitude)
      } catch (err) {
        console.error('Error while GET Api: ', err)
      }
    }
    fetchData()

    let map = tt.map({
      key: 'itH5JL3iSUKfcpYTMX1VSSMjaxduVfmV',
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    })
    console.log(mapLongitude, mapLatitude)
    setMap(map)
    return () => map.remove()
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen max-w-[1240px] mx-auto">
        <div className='flex justify-around items-center flex-col bg-slate-900 h-full w-full border-solid border-2 border-[#22c55e] text-light-gray'>
          <IPInfos ipInfos={ipInfos}/>
          <div ref={mapElement} className="mapDiv h-4/6 w-10/12"></div>
        </div>
      </div>
    </>
  )
}

export default App