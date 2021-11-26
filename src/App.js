import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddTours from './components/AddTours/AddTours';
import TourAdded from './components/TourAdded/TourAdded';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MyTours from './components/MyTours/MyTours';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProcessBooking from './components/ProcessBooking/ProcessBooking';
import BookingPlaced from './components/BookingPlaced/BookingPlaced';
import AllBookings from './components/AllBookings/AllBookings';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <PrivateRoute path="/mytours">
              <MyTours></MyTours>
            </PrivateRoute>
            <PrivateRoute path="/addtours">
              <AddTours></AddTours>
            </PrivateRoute>
            <PrivateRoute path="/touradded">
              <TourAdded></TourAdded>
            </PrivateRoute>
            <PrivateRoute path="/touritem/:_id">
              <ProcessBooking></ProcessBooking>
            </PrivateRoute>
            <PrivateRoute path="/bookingplaced">
              <BookingPlaced></BookingPlaced>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
