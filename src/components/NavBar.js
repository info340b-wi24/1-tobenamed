import { Link } from 'react-router-dom';

export function NavBar () {
  return (
    <nav>
      <div className="nav-left">
        <h1>ScentSeeker</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/quizresults">Quiz Result</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/yourlist">My List</Link></li>
        <li><Link to="/filter">Filter</Link></li>
       
      </ul>
    </nav>
  );
};

export default NavBar;

