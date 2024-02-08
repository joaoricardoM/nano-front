'use client'

import React, { useState } from 'react'
import axios from 'axios'

const DownloadFile = () => {
  const [fileUri, setFileUri] = useState('')
  const [fileId, setFileId] = useState('')

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
    } catch (error) {
      console.error('Erro ao baixar arquivo:', error)
      alert('Erro ao baixar arquivo!')
    }
  }

  return (
    <div className="space-x-4">
      <div className="inline-block">
        <input
          type="text"
          placeholder="ID do arquivo"
          onChange={handleIdChange}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 text-gray-950"
        />
      </div>
      <div className="inline-block">
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
        >
          Baixar
        </button>
        {fileUri && (
          <a
            href={fileUri}
            download
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Download
          </a>
        )}
      </div>
    </div>
  )
}

export default DownloadFile
