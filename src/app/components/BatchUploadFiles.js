'use client'

import React, { useState } from 'react'
import axios from 'axios'

const BatchUploadFiles = () => {
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Por favor, selecione um ou mais arquivos.')
      return
    }

    try {
      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
      }
      await axios.post('http://localhost:8080/files/lote', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert('Arquivos enviados com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar arquivos:', error)
      alert('Erro ao enviar arquivos!')
    }
  }

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor="upload-input" className="cursor-pointer mr-4">
        <input
          type="file"
          accept=".xml"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block">
          Upload em lote
        </div>
      </label>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpload}
      >
        Enviar
      </button>
    </div>
  )
}

export default BatchUploadFiles
