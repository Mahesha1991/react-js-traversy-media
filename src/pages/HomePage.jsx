import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
        <Hero title="Become a React Dev" subtitle="Find a react Job"/>
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default HomePage