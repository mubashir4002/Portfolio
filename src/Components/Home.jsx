import  Navbar from './Navbar';
const Home = () => {
  return (
  
    <section className="Container">
       <Navbar/>
      <div id="home" className="Intro">
        <div className="box ">
        <h4>Hello! My Name Is</h4>
        <h1>Mubashir <span>Sohail</span></h1>
        <h3>I am a Web Developer.</h3>
        <button type="button">Read More</button>
      </div>
      </div>
      </section>
  );
};

export default Home;
