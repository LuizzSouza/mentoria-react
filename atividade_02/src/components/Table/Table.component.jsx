import styles from "./Table.module.scss"

import { useState } from "react";
import { useEffect } from "react"


import { Button, Checkbox, Layout, Table } from "@sicredi/react";
import { userService } from "../../services/index";


export const TableUsers = () => {

  const [users, setUsers] = useState([])
  const [ids, setIds] = useState([])

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

  console.log(ids);

  const handleIds = (id) => {
    const idExists = ids.includes(id)
    if (idExists) {
      const newIds = ids.filter((item) => item !== id)
      setIds(newIds)
    } else {
      setIds([...ids, id])
    }
  }

  const deletar = async() => {
    try {
      for (const iterator of ids) {
        await userService.deleteUser(iterator)
      }
      setIds([])
      getUsers()
    } catch (error) {
      console.log(error);
    }
  }
 

  const colunas = [
    {
      label: "",
      accessor: (item) =>(
        <>
        <Checkbox onClick={() => handleIds(item.id)}/>
        </>
      )
    },
    {
      label: "id",
      accessor: (item) =>(
        <>
        {item.id}
        </>
      )
    },
    {
      label: "Nome",
      accessor: (item) =>(
        <>{item.name}</>
      ),
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
    <>
      <Button appearance="danger" disabled={ids.length === 0} onClick={deletar}>Deletar</Button>
      <Layout className={styles.tableLayout}>
      {users && <Table rows={users} columns={colunas} className={styles.tableLayoutTable} />}
      </Layout>
    </>
  )
}