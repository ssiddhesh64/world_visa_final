import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import AssessmentForm from "pages/AssessmentForm";
import BlogPage from 'pages/BlogPage'
import ContactsPage from 'pages/ContactsPage'
import ImmigrationToolkits from 'pages/ImmigrationToolkits'
import HomeImmigrationCanada from 'pages/HomeImmigrationCanada'
import Australia from 'pages/Australia'
import TEAMSPage from 'pages/TEAMS'
import Faq from 'pages/Faq'

const ProjectRoutes = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route
          path="/assessment"
          element={<AssessmentForm />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/immigration" element={<ImmigrationToolkits />} />
        <Route path="/canada" element={<HomeImmigrationCanada />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/teams" element={<TEAMSPage />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  )
}

export default ProjectRoutes