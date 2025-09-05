import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routing/AppRoutes";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <Layout>
    <Router>
      <AppRoutes />
    </Router>
    </Layout>
  );
}
