import React from 'react'
import Header from '../components/companyprofile/header'
import Loading from '../components/companyprofile/loadingpage'
import Navbar from '../components/companyprofile/navbar'
import Team from '../components/companyprofile/team'
import Benefits from '../components/companyprofile/benifits'
import Footer from '../components/companyprofile/footer'

function landingPage() {
  return (
    <>
    <Navbar />
    <Header />
    <Loading />
    <Team />
    <Benefits />
    <Footer />
    </>
  )
}

export default landingPage