'use client'

// pages/index.js
import React from 'react'
import UploadFile from './components/uploadFile'
import DownloadFile from './components/donwloadFile'
import ParticlesContainer from './components/particles'

const IndexPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <ParticlesContainer />
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4">Upload de Arquivo</h1>
        <UploadFile />
        <h1 className="text-3xl font-bold mt-8 mb-4">Download de Arquivo</h1>
        <DownloadFile />
      </div>
    </div>
  )
}

export default IndexPage
