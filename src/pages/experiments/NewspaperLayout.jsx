import './NewspaperLayout.css';

const NewspaperLayout = () => {
  return (
    <div className="newspaper-demo">
      <div className="newspaper-page">
        <header className="newspaper-header">
          <h1 className="newspaper-title">THE DAILY TECH</h1>
          <div className="newspaper-date">Monday, February 24, 2026</div>
        </header>

        <div className="newspaper-content">
          <article className="headline-article">
            <h2>AI Engineer Revolutionizes Portfolio Design</h2>
            <div className="byline">By Akshay Adate</div>
            <p className="lead">
              In a groundbreaking move, senior AI engineer Akshay Adate has created 
              an interactive portfolio that blends traditional newspaper aesthetics 
              with modern web technologies.
            </p>
            <p>
              With over 5 years of experience in GenAI and full-stack development, 
              Adate brings a unique perspective to portfolio design, making it both 
              nostalgic and cutting-edge.
            </p>
          </article>

          <div className="newspaper-columns">
            <article className="column">
              <h3>Skills Section</h3>
              <ul>
                <li>Generative AI & LLMs</li>
                <li>React & Node.js</li>
                <li>Cloud Architecture</li>
                <li>Machine Learning</li>
              </ul>
            </article>

            <article className="column">
              <h3>Latest Projects</h3>
              <p>
                <strong>Enterprise GenAI Platform:</strong> Serving 10,000+ users 
                with advanced AI capabilities.
              </p>
              <p>
                <strong>ML Pipeline Automation:</strong> Streamlining data processing 
                workflows.
              </p>
            </article>

            <article className="column">
              <h3>Contact Info</h3>
              <p>📧 contact.akshayna@gmail.com</p>
              <p>🔗 linkedin.com/in/adate/</p>
              <p>📍 Bangalore, India</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewspaperLayout;
