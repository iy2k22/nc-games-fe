import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewsPage from "./components/ReviewsPage";
import Review from './components/Review';
import CategoryList from './components/CategoryList';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='/reviews/:review_id' element={<Review />} />
        <Route path='/categories' element={<CategoryList />} />
      </Routes>
  </div>
  </BrowserRouter>
);

export default App;
