import "../styles/aboutme.css";
const Aboutme = () => {
    return (
      <div id="aboutme">
        <div><h1 style={{fontSize: "50px"}}>Skill Prompt Pvt Ltd.</h1>
        <h3 style={{marginTop: "15px", marginBottom: "15px", fontSize: "30px"}}>
            STUDENT | LEARNER  | DEVELOPER  | </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, adipisci quis molestias ad fugit magni dolores nesciunt officiis, ipsum cumque ut voluptatem quos enim ullam earum. Voluptas velit fugiat inventore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis expedita, itaque maiores quia, assumenda repellat, praesentium corporis inventore nesciunt pariatur dolorum sequi quidem veritatis et beatae dolor minus ea ratione alias debitis eos molestiae sed laboriosam? Ipsum dicta inventore velit eius natus consequatur, officia ut magnam voluptatum voluptate amet, soluta pariatur corrupti veritatis a at rem nihil facere molestias mollitia quis totam facilis fugiat! Voluptatibus labore saepe sint recusandae itaque voluptatem omnis ducimus nesciunt pariatur blanditiis totam officiis odit architecto ullam exercitationem ipsam nostrum, tenetur aut nisi molestiae vitae ratione animi facilis porro. Necessitatibus harum nemo a incidunt sint!
            </p>
            <div style={{ display: "flex", gap: "10px",  }}>
          <div>
            <a href="https://www.facebook.com/">
            <img style={{height: "30px"}} src="facebook.png" alt="facebook"  />
            </a>
          </div>
          <div>
          <a href="https://github.com/">
            <img style={{height: "30px"}} src="github-sign.png" alt="github"/>
            </a>
          </div> 
        </div>
            </div>
       
        <div> <img src="IMG-20231204-WA0018.jpg"alt="pic"/></div>
      </div>
    );
  };
  
  export default Aboutme;
