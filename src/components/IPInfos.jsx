import { useState, useEffect } from "react"
import Axios from 'axios'

const IPInfos = () => {
    const [ipInfos, setIpInfos] = useState({})

    const fetchData = () => {
        Axios.get('http://ip-api.com/json/').then((res) => {
            setIpInfos(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                  <tr key={ipInfos.query} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">IP:</td>
                    <td className="text-left px-4 py-2">{ipInfos.query}</td>
                  </tr>
                  <tr key={ipInfos.country} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Country:</td>
                    <td className="text-left px-4 py-2">{ipInfos.country}</td>
                  </tr>
                  <tr key={ipInfos.regionName} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Region:</td>
                    <td className="text-left px-4 py-2">{ipInfos.regionName}</td>
                  </tr>
                  <tr key={ipInfos.city} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">City:</td>
                    <td className="text-left px-4 py-2">{ipInfos.city}</td>
                  </tr>
                  <tr key={ipInfos.isp} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">ISP:</td>
                    <td className="text-left px-4 py-2">{ipInfos.isp}</td>
                  </tr>
                  <tr key={ipInfos.org} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Organization:</td>
                    <td className="text-left px-4 py-2">{ipInfos.org}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default IPInfos