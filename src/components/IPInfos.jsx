
const IPInfos = (props) => {

    return (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                  <tr key={props.ipInfos.ip} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">IP:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.ip}</td>
                  </tr>
                  <tr key={props.ipInfos.country_name} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Country:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.country_name}</td>
                  </tr>
                  <tr key={props.ipInfos.region} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">Region:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.region}</td>
                  </tr>
                  <tr key={props.ipInfos.city} className="border-b">
                    <td className="text-left px-4 py-2 font-semibold">City:</td>
                    <td className="text-left px-4 py-2">{props.ipInfos.city}</td>
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