//Will use IntersectionObserver, JS API that allows me to see where the element is in the screen and see when it enters the area so that we can animate it if that happens

//STRUCTURE
/* const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Acción cuando el elemento es visible
        } else {
            // Acción cuando el elemento no es visible
        }
    });
}, {
    root: null, //Viewport is null
    rootMargin: '0px',
    threshold: 0
});

const elements = document.querySelectorAll('.element');
elements.forEach(element => {
    observer.observe(element);
});
 */

//Select all elements with className project
const projects = document.querySelectorAll('.project');

console.log(projects);

const observer = new IntersectionObserver(
  (projects) => {
    projects.forEach((project) => {
      console.log(project);

      // Check if the project is in the viewport
      if (project.isIntersecting) {
        console.log('obseving');
        //If visible, we add the class animate to it
        project.target.classList.add('animate');
        //Stops observation after animation so that it not repeats
        observer.unobserve(project.target);
      } else {
        project.target.classList.remove('animate');
      }
    });
  },
  {
    //Options
    //At least 50% of the project has to be on screen for the animation to begin
    root: null, //Viewport
    threshold: 0.5,
  }
);

projects.forEach((project) => {
  observer.observe(project);
});
