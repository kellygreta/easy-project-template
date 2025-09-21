import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Importa le pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Homepage */}
          <Route path="easy-project-template/" element={<HomePage />} />

          {/* AboutMe page */}
          <Route path="easy-project-template/about" element={<AboutPage />} />

          {/* Project page */}
          <Route
            path="easy-project-template/projects"
            element={<ProjectsPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
