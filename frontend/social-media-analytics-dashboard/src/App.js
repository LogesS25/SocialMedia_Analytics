import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import PostAnalytics from './components/PostAnalytics';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/post-analytics" component={PostAnalytics} />
          <Route path="/user-details" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
