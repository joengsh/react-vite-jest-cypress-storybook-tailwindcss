import { Page } from '@/stories/Page';
import App from '@components/App/App';
import { createRoutesFromElements, Route } from 'react-router-dom';
import DummyLayout from '../Layout/Layout';

const routes = createRoutesFromElements(
  <Route path="/" element={<DummyLayout />}>
    <Route index element={<App />} />
    <Route path="page" element={<Page />} />
    <Route path="about" element={<div>About</div>} />
  </Route>
);

export default routes;
