'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const DownloadFile = () => {
  const [fileUri, setFileUri] = useState('')
  const [fileId, setFileId] = useState('')
  const [showDownloadButton, setShowDownloadButton] = useState(true)

  const handleIdChange = (e) => {
    setFileId(e.target.value)
  }

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/files/${fileId}`,
        {
          responseType: 'blob'
        }
      )
      const url = window.URL.createObjectURL(new Blob([response.data]))
      setFileUri(url)
      setShowDownloadButton(false)
    } catch (error) {
      console.error('Erro ao baixar arquivo:', error)
      toast.error('Erro ao baixar arquivo!')
    }
  }

  const handleReset = () => {
    setFileUri(null)
    setShowDownloadButton(true)
  }

  return (
    <div className="space-x-4 ml-20">
      <div className="inline-block">
        <input
          type="text"
          placeholder="ID do arquivo"
          onChange={handleIdChange}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 text-gray-950"
        />
      </div>
      <div className="inline-block">
        {showDownloadButton ? (
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Pesquisar
          </button>
        ) : (
          <a
            href={fileUri}
            download
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
            onClick={handleReset}
          >
            Download
          </a>
        )}
      </div>
    </div>
  )
}

export default DownloadFile
