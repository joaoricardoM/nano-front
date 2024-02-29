// components/BatchUploadFiles.js
import React, { useState } from 'react'
import axios from 'axios'
import Uppy from '@uppy/core'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { Dashboard } from '@uppy/react'
import { toast } from 'react-toastify'

const BatchUploadFiles = () => {
  const [fileStatus, setFileStatus] = useState('')

  const uppy = new Uppy({
    autoProceed: false,
    restrictions: {
      allowedFileTypes: ['.xml']
    }
  })

  uppy.on('complete', async (result) => {
    try {
      const formData = new FormData()
      result.successful.forEach((file) => {
        formData.append('files', file.data)
      })
      await axios.post('http://localhost:8080/files/lote', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setFileStatus('Arquivos enviados com sucesso!')
      toast.succes('Arquivos enviados com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar arquivos:', error)
      setFileStatus('Erro ao enviar arquivos!')
      toast.error('Erro ao enviar arquivos!')
    }
  })

  return (
    <div className="mb-4">
      <Dashboard
        uppy={uppy}
        inline
        height={80}
        width="100%"
        proudlyDisplayPoweredByUppy={false}
        locale={{
          strings: {
            dropPasteFiles: 'Solte arquivos aqui ou %{browseFiles}',
            browseFiles: 'navegue'
          }
        }}
      />
      <p
        style={{ font: 'small-caption', color: 'orange', marginBottom: '10px' }}
      >
        Somente upload de arquivos XML
      </p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => uppy.upload()}
      >
        Enviar
      </button>
    </div>
  )
}

export default BatchUploadFiles
