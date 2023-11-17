import React from 'react'
import Layout from '../components/Layout'
import maptest from '../image/maptest.png'

const HomePage = () => {
  return (
    <Layout>
      <div style={{content:"center"}}>
      <img src={maptest} alt="maptest" />
      </div>
    </Layout>
  )
}

export default HomePage