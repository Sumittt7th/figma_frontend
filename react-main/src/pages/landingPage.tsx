import React from 'react'
import Header from '../components/companyprofile/header'
import Loading from '../components/companyprofile/loadingpage'
import Navbar from '../components/companyprofile/navbar'
import Team from '../components/companyprofile/team'

function landingPage() {
  return (
    <>
    <Navbar />
    <Header />
    <Loading />
    <Team />
    </>
  )
}

export default landingPage