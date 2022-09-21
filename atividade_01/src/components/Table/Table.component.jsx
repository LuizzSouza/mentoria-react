import { useState } from "react";
import { useEffect } from "react"

import { userService } from '../../services/index';

import { Table } from "@sicredi/react";



export const TableUsers = () => {

  const [users, setUsers] = useState([])

  const getUsers = async() => {
    try {
      const {data} = await userService.listUsers();
      if (data) {
        setUsers(data)
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

 

  const colunas = [
    {
      label: "Nome",
      accessor: (item) =>(
        <>{item.name}</>
      )
    },
    {
      label: "Email",
      accessor: (item) =>(
        <>{item.email}</>
      )
    },
    {
      label: "Carteira de Motorista",
      accessor: (item) =>(
        <>{item.driver_license}</>
      )
    },
    
  ]

  return (
    <div>
      {users && <Table rows={users} columns={colunas}  />}
    </div>
  )
}