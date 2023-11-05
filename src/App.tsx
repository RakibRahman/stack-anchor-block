import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '@/lib/layout';
import Routings from '@/lib/router/Routings';

import reduxStore from './store';

const App = () => (
  <Provider store={reduxStore}>
    <Router>
      <Layout>
        <Routings />
      </Layout>
      <Toaster position="bottom-center" />
    </Router>
  </Provider>
);

export default App;
