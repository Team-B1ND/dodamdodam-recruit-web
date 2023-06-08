import Router from "./components/Router";
import Layout from "./components/common/Layout";
import Providers from "./components/common/Providers";

function App() {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
}

export default App;
