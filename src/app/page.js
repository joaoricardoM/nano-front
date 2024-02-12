'use client'

// pages/index.js
import React from 'react'
import UploadFile from './components/uploadFile'
import DownloadFile from './components/donwloadFile'
import ParticlesContainer from './components/particles/particles'
import BatchUploadFiles from './components/BatchUploadFiles'
import GetListFiles from './components/getListFiles'

const IndexPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <ParticlesContainer />
      <div className="w-1/2">
        <div className="flex flex-col mb-8">
          <div className="flex justify-between mb-4">
            <div className="w-1/2 mr-4">
              <h6 className="font-bold">Upload de arquivo</h6>
              <UploadFile />
            </div>
            <div className="w-1/2 ml-26">
              <h6 className="text-1xl font-bold ml-20">Download de arquivo</h6>
              <DownloadFile />
            </div>
          </div>
          <div className="w-full">
            <GetListFiles />
          </div>
        </div>
        <div className="flex justify-end -mt-12">
          <BatchUploadFiles />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
