'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Text } from '@nextui-org/react'

const GetListFiles = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/files')
        setFiles(response.data)
        console.log(response)
      } catch (error) {
        console.error('Erro ao obter a lista de arquivos', error)
      }
    }

    fetchData()
  }, [])

  const renderCell = (file, columnKey) => {
    switch (columnKey) {
      case 'id':
        return (
          <a href={file.url} target="_blank">
            {file.id}
          </a>
        )
      case 'nome':
        return (
          <a href={file.url} target="_blank">
            {file.nome}
          </a>
        )
      case 'uploadData':
        return (
          <>
            <div>{file.uploadDate}</div>
          </>
        )
      default:
        return file[columnKey]
    }
  }

  return (
    <>
      <Table
        aria-label="Tabela Arquivos XML"
        css={{
          height: 'auto',
          minWidth: '100%',
          bg: '$white',
          zIndex: '$10'
        }}
        selectionMode="none"
      >
        <Table.Header>
          <Table.Column key="id">ID </Table.Column>
          <Table.Column key="nome">Nome</Table.Column>
          <Table.Column key="uploadData">Data</Table.Column>
        </Table.Header>
        <Table.Body items={files}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Text size="$md" css={{ ml: '10px', color: 'White' }}>
        Arquivos XML Disponíveis para visualização
      </Text>
    </>
  )
}

export default GetListFiles
