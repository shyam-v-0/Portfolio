import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPages'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import Header from './Pages/Header'
export default function App() {
    return (
        <BrowserRouter>
       <Header/>
            <Routes>
                <Route path="/"         element={<HomePage />} />
                <Route path="/about"    element={<AboutPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact"  element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}