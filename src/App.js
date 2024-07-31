import { Route, Routes } from 'react-router-dom';

// Pages
import AllMeetupsPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

//Components
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
        <Routes> {/*Switch在新的react-router中已經被Routes取代*/}
          <Route exact path="/" element={<AllMeetupsPage/>}/>
          <Route path="/new-meetup" element={<NewMeetupPage/>}/>
          <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
