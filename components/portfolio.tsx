import Project from "./project";

export default function Portfolio() {
  return (
    <section className="section is-medium" id="portfolio">
      <h2 className="title"> Our Portfolio </h2>
      <br />

      <div className="columns is-centered">
        <div className="column is-6-tablet is-6-desktop">
          <Project
            projectName="Arshi 365 Ecommerce"
            projectImage="/arshi.PNG"
            projectLink="https://mahmudhasan-test-4dzlnukip-mahmudul165.vercel.app/"
          />
        </div>
        {/*<div className="column is-6-tablet is-6-desktop">
                    <Project 
                        projectName="Mindmap Education Consultancy"
                        projectImage="/mindmap-project.jpg" 
                        projectLink="http://mindmapedu.co.uk/" />
                </div>*/}
        <div className="column is-6-tablet is-6-desktop">
          <Project
            projectName="Automation process for a psychotherapy hospital"
            projectImage="/misi.PNG"
            projectLink="https://misi-lamptechs-bd.vercel.app/"
          />
        </div>
      </div>

      <div className="columns is-centered">
        <div className="column is-6-tablet is-6-desktop">
          <Project
            projectName="Influencer hub"
            projectImage="/influencer.PNG"
            projectLink="https://influencer-marketplace.vercel.app/"
          />
        </div>
        <div className="column is-6-tablet is-6-desktop">
          <Project
            projectName="Regulatory advisor"
            projectImage="/regulatory.PNG"
            projectLink="https://regulatedadvice.co.uk/"
          />
        </div>
      </div>
    </section>
  );
}
