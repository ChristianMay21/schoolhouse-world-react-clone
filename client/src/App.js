import './App.css';
import Course from './components/Course/Course'
import HeaderImage from './components/HeaderImage/HeaderImage'
import Nav from './components/Nav/Nav'
import PageBody from './components/PageBody/PageBody'
function App() {
  return (
    <div className="App">

      <Nav />
      <HeaderImage page="tutor-certification"></HeaderImage>
      <PageBody page="tutor-certification"/>
    </div>
  );
}

export default App;
