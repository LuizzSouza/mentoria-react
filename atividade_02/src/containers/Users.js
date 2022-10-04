import { Layout } from '@sicredi/react';
import '../App.css';

import { TableUsers } from "../components/Table/Table.component"

export const Users = () => {
  return (
    <Layout>
      <Layout.Container> 
      <h1>Usuarios: </h1>
      <TableUsers />
      </Layout.Container>
    </Layout>   
  )
}