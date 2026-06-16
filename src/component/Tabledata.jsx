import React from 'react'

const Tabledata = () => {
  return (
    <div className='px-6'>
      <table className='w-full mt-6'>
        <thead>
            <tr className='bg-gray-500 text-white'>
                <th className='p-2 border'>Name</th>
                <th className='p-2 border'>Place</th>
                <th className='p-2 border'>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border hover:bg-yellow-100'>
                <td className='p-2 border'>Ritika</td>
                <td className='p-2 border'>Delhi</td>
                <td className='p-2 border'>19</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabledata
