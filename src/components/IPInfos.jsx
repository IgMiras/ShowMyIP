import { useState, useEffect } from "react"
import Axios from 'axios'

const IPInfos = (props) => {

    return (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                  <tr key={props.ipInfos.query} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">IP:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.query}</td>
                  </tr>
                  <tr key={props.ipInfos.country} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Country:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.country}</td>
                  </tr>
                  <tr key={props.ipInfos.regionName} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Region:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.regionName}</td>
                  </tr>
                  <tr key={props.ipInfos.city} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">City:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.city}</td>
                  </tr>
                  <tr key={props.ipInfos.isp} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">ISP:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.isp}</td>
                  </tr>
                  <tr key={props.ipInfos.org} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Organization:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.org}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default IPInfos