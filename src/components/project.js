import image1 from "../images/proj1.jpg";
import image2 from "../images/proj2.jpg";
import image3 from "../images/proj3.jpg";
import image4 from "../images/proj4.jpg";

function Project () {


const projects =[{name:"Project 1" , image:image1 },{name:"Project 2" , image:image2 },{name:"Project 3" , image:image3 },{name:"Project 4" , image:image4 }];

  return(
<div>
<section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {
          projects.map( el=>
            <div class="project-card">
          <img src= {el.image} alt="project" />
          <h3>{el.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>)
        }
      </div>
    </section>
  </div>
  );
  
}
export default Project;
