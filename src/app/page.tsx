import React from 'react'
import Footer from './components/footer/Footer'
import BlogSection from './sections/blogsection/BlogSection'
import Header from './sections/headersection/Header'
import QuickLinks from './sections/quicklinkssection/QuickLinks'
import TreatmentSection from './sections/treatmentsection/TreatmentSection'
// import NavBar from './components/nav-bar/NavBar'



const page = () => {
  return (
    <div>
      <Header />
      <QuickLinks />
      <TreatmentSection />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default page
