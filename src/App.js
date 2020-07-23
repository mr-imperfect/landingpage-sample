import React from 'react';
import "./App.css"
function App(){
  return(
    <body>
    <div className="container">
    <div className="first-section">

    <div className="left-section">
  <h1 className="nata"><b>NATA Coaching</b></h1>
  <p className="inblock">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic facere molestias et deleniti, aspernatur neque consectetur, nesciunt sed qui totam reprehenderit recusandae nihil eveniet odit dignissimos ad voluptates repudiandae. Veritatis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic facere molestias et deleniti, aspernatur neque consectetur, nesciunt sed qui totam reprehenderit recusandae nihil eveniet odit dignissimos ad voluptates repudiandae. Veritatis!</p>

</div>
<div className="right-section">
  <div className="one">
<h1><b>15+</b></h1>
<p>Chapters</p>
</div>
<div className="two">
<h1><b>5+</b></h1>
<p>Assignments</p>
</div>
<div className="three">
<h1><b>10+</b></h1>
<p>Extra resources</p>
</div>
<div className="buttonclass">
  <button className="button">Join Now</button>
</div>
  </div> 
  </div>
  
  <div className="second-section">
    <h1 className="course">Course introduction </h1>
    <div className="video"><iframe width="560" height="270" src="https://www.youtube.com/embed/AKpQpObIGO8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    
  </div>
 
  </div>
  </body>
  
  
  )
}

export default App;
