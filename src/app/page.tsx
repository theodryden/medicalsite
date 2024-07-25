import React from 'react'
import Footer from './components/footer/Footer'
import Header from './sections/headersection/Header'
import InfoSection from './sections/infosection/InfoSection'
import AboutEvents from './sections/abouteventssection/AboutEvents'
import QuickLinks from './sections/quicklinkssection/QuickLinks'
import TreatmentSection from './sections/treatmentsection/TreatmentSection'
// import NavBar from './components/nav-bar/NavBar'



const page = () => {
  return (
    <div>

      <Header />
      <QuickLinks />
      <TreatmentSection />
      <AboutEvents />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default page
