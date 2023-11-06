import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewsPage from "./components/ReviewsPage";
import Review from './components/Review';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';
import Home from './components/Home';
import Invalid from './components/Invalid';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/reviews/:review_id' element={<Review />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='*' element={<Invalid />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
