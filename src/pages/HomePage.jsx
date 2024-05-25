import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
import HomeCards from './../components/HomeCards'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HomeCards/>
      <JobListing isHome={true}/>
      <ViewAllJobs/>
    </div>
  )
}

export default HomePage
