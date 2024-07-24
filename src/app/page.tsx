import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import InfoSection from './components/sections/infosection/InfoSection'
import AboutEvents from './components/sections/abouteventssection/AboutEvents'
import QuickLinks from './components/sections/quicklinkssection/QuickLinks'

const page = () => {
  return (
    <div>
      <Header />
      <QuickLinks />
      <AboutEvents />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default page
