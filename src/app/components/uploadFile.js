'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const UploadFile = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'text/xml') {
      setFile(selectedFile)
    } else {
      toast.info('Por favor, selecione um arquivo XML.')
    }
  }
  const handleUpload = async () => {
    if (!file) {
      toast.info('Por favor, selecione um arquivo XML.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('file', file)
      await axios.post('http://localhost:8080/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      toast.success('Arquivo enviado com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error)
      toast.info('Arquivo já existe')
    }
  }

  return (
    <div className="space-x-4">
      <div className="inline-block">
        <label htmlFor="upload-input" className="cursor-pointer">
          <input
            id="upload-input"
            type="file"
            accept=".xml"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block">
            Upload
          </div>
        </label>
      </div>
      <div className="inline-block">
        <button
          onClick={handleUpload}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default UploadFile
