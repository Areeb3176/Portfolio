import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Sparkles } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'education', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Supabase', logo: '/supabase-seeklogo.png' },
    { name: 'LangChain', logo: '/lanchain.png' },
    { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Gemini', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
    { name: 'Claude', logo: 'https://claude.ai/images/claude_app_icon.png' },
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'DeepSeek', logo: '/21.jpeg' },
    { name: 'Meta AI', logo: '/png-transparent-meta-logo-facebook-social-media-chat-message-communication-icon-thumbnail.png' },
    { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Matplotlib', logo: 'https://matplotlib.org/_static/images/logo2.svg' },
    { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-mark-color.png' },
    { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
    { name: 'Groq', logo: '/gr.webp' },
    { name: 'SQL', logo: 'sql.png' },

  ];

const certifications = [
  { 
    title: 'Google Advanced Data Analytics Certificate', 
    provider: 'Those who earn the Google Advanced Data Analytics Certificate have completed seven courses that include hands-on, practice-based assessments and are designed to prepare them for advanced roles in data analytics and entry-level roles in data science. They are competent in exploring large datasets, applying data analysis techniques, and building models to extract insights. They are also competent in machine learning, predictive modeling, and statistics.', 
    id: 1,
    url: 'https://www.credly.com/badges/1adbadd9-adfe-4a37-8a4c-6655ec6088cb'
  },
  { 
    title: 'Google IT Support Professional Certificate (v2)', 
    provider: 'Those who earn the Google IT Support Certificate have completed five-courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in IT support. They are competent in foundational skills, including troubleshooting and customer service, networking, operating systems, system administration, and security.', 
    id: 2,
    url: 'https://www.credly.com/badges/d2c0f50a-16f4-4901-936e-5b9a3c6aee18'
  },
  { 
    title: 'Data Analyst Associate', 
    provider: 'To get certified as a Data Analyst Associate, this candidate had to demonstrate that they have the knowledge, skills, and abilities to succeed at the entry level in this role. The competency domains assessed included, but were not limited to Data Management Exploratory Analysis Statistical Experimentation Communication and Visualization', 
    id: 3,
    url: 'https://www.datacamp.com/certificate/DAA0013135893671'
  },
  { 
    title: 'Google Prompting Essentials', 
    provider: 'Those who earn the Google Prompting Essentials Certificate have completed four courses, developed by experts at Google, that help them design effective prompts for generative AI. They understand the prompting principles of evaluation, iteration, responsible AI, and have practical experience using AI to help with personal and work tasks. They have experience with text-to-text, text-to-image, and multimodal prompts, and advanced prompting techniques, like prompt chaining and creating an AI agent.', 
    id: 4,
    url: 'https://www.credly.com/badges/8c7db37f-4dda-48ed-bd8d-ce248e28a531'
  },
  { 
    title: 'Google IT Automation', 
    provider: 'Coming soon', 
    id: 5,
    url: ''
  },
  {
    title: 'Data Science', 
    provider: 'Coming soon', 
    id: 6,
    url: ''
  }
];

  const projects = [
  { 
    id: 1, 
    title: 'Smart Business Chatbot', 
  description: 'The Smart Business Chatbot is a business-focused virtual assistant built using Retrieval-Augmented Generation (RAG) methodology. It is designed to answer complex business-related questions with high accuracy and reliability. The chatbot understands user queries, determines the best source of information (internal documents or live web), and responds with well-structured, fact-based answers. It mimics the workflow of a human researcher routing, retrieving, validating, and generating content in real time. Supports topics like branding, marketing, business planning, SEO, startup guidance, and more. Answers are streamed in real-time (typing style) for a natural chat experience. Includes fallback logic: If documents don\'t help, it performs live web search via Tavily API.',
  technologies: [
    'Python',
    'Flask', 
    'LangChain',
    'LangGraph',
    'Groq LLM',
    'ChromaDB',
    'HuggingFace Embeddings',
    'Tavily Search API',
    'Server-Sent Events (SSE)',
    'Pydantic',
    'RAG Architecture'
  ], 
   url: 'https://github.com/Areeb3176/Smart-Business-Chatbot',
  image: '\chatbot.jpeg' // Add your image path
  },
  { 
    id: 2, 
    title: 'Product Photography', 
    description: 'The Product Photography enables users to transform raw product images into polished, professional-looking visuals using AI.Users simply upload an image of their product, and the system performs a series of automated steps including noise reduction, background removal, and AI-powered editing using textual prompts. This is especially useful for e-commerce, digital marketing, and brand presentation, where high-quality product visuals are essential.No design skills required everything is automated via AI. Backgrounds can be made transparent or styled via prompts.Final image is enhanced and saved in high resolution', 
    technologies: [
      'Python',
      'Pillow (PIL Fork)',
      'OpenCV (cv2)',
      'rembg',
      'Google Gemini API',
      'Flask',
      'Supabase',
      'React (Frontend)',
      ],
    url: 'https://github.com/Areeb3176/Product-Photography',
    image: 'p1.JPG'
  },
  { 
    id: 3, 
    title: 'Web Scraper', 
    description: 'The Web Scraper is designed to intelligently extract structured data from websites without requiring knowledge of complex HTML structures or coding. Users simply provide a URL and define what data they want (e.g., product name, price, description). The system then renders the page, detects additional pages (pagination), and uses advanced LLM-based extraction to return clean, structured data ready for use in business analysis, product listings, or research.No manual scraping or XPath needed.Can handle dynamic websites with pagination.Data is organized into tables or JSON, and stored in a secure database', 
        technologies: [
          'Python',
          'Flask',
          'Playwright',
          'Supabase',
          'Pydantic',
          'Groq / Gemini AI',
          'Markdown Conversion',
          'Pagination Module',
          'Cost Monitoring Logic',
        ],
    url: 'https://github.com/Areeb3176/Web-Scraper',
    image: 'w1.jpeg'
  },
  { 
    id: 4, 
    title: 'Logo Generator', 
    description: 'The Logo Generator module allows users to create high-quality, brand-ready logos by simply describing their business or brand idea.This feature combines Stable Diffusion XL (SDXL) with a specialized LoRA model and Gemini AI to enhance prompts and produce visually appealing, AI-generated logos. The system also applies post-processing to refine the output for clarity, color balance, and resolution making the logos suitable for digital or print use.Users just describe their concept and pick shape/style no design skills needed.Generates multiple logo variations at once.Ideal for startups, freelancers, and brand creators', 
    technologies: [
      'Python',
      'Flask',
      'Stable Diffusion XL (SDXL)',
      'LoRA (.safetensors)',
      'HuggingFace Diffusers',
      'Google Gemini API',
      'Prompt Dictionaries',
      'Pillow (PIL)',
      'React (Frontend)',
    ],
    url: 'https://github.com/Areeb3176/Logo-Generator',
    image: 'l1.JPG'
  },
    id: 5, 
    title: 'Logo Generator', 
    description: 'The Logo Generator module allows users to create high-quality, brand-ready logos by simply describing their business or brand idea.This feature combines Stable Diffusion XL (SDXL) with a specialized LoRA model and Gemini AI to enhance prompts and produce visually appealing, AI-generated logos. The system also applies post-processing to refine the output for clarity, color balance, and resolution making the logos suitable for digital or print use.Users just describe their concept and pick shape/style no design skills needed.Generates multiple logo variations at once.Ideal for startups, freelancers, and brand creators', 
    technologies: [
      'Python',
      'Flask',
      'Stable Diffusion XL (SDXL)',
      'LoRA (.safetensors)',
      'HuggingFace Diffusers',
      'Google Gemini API',
      'Prompt Dictionaries',
      'Pillow (PIL)',
      'React (Frontend)',
    ],
    url: 'https://github.com/Areeb3176/Logo-Generator',
    image: 'l1.JPG'
  { 
    id: 6, 
    title: 'IMDB Movie Review Sentiment Classifier', 
    description: 'This project involves building a sentiment analysis classifier to predict whether movie reviews are positive or negative using the IMDB dataset (50,000 reviews from Kaggle). The text data was preprocessed by removing HTML tags, punctuation, and stopwords, followed by tokenization and normalization using NLTK.Exploratory Data Analysis (EDA) included generating word clouds and analyzing review length, word count, and average word length. Multiple models were trained for classification, including Naive Bayes, Logistic Regression, CNN, RNN, and LSTM. Model performance was evaluated using accuracy, precision, recall, and F1 score, showcasing the effectiveness of both traditional and deep learning approaches.',
        technologies: [
          'Python',
          'Data Processing',
          'Text Preprocessing',
          'Visualization',
          'Machine Learning',
          'Deep Learning',
          'Dataset Source',
        ], 
    url: 'https://github.com/Areeb3176/IMDB-Movie-Review-Sentiment-Classifier',
    image: 'i.png'
  },
  { 
    id: 7, 
    title: 'Number Plate Detection', 
    description:'This project focuses on detecting vehicles and recognizing license plate numbers in video footage using deep learning and computer vision techniques. It integrates YOLOv8, a state-of-the-art object detection model, with SORT, a real-time tracking algorithm, to accurately track vehicles and extract number plates across video frames.The system first uses YOLOv8 to detect vehicles, and then applies a custom-trained YOLOv8 model to detect license plates. Each detected license plate is cropped, preprocessed using OpenCV (grayscale conversion and thresholding), and passed through an OCR function to read the text. The SORT tracker ensures consistent vehicle ID assignment across frames. Finally, the detected results, including vehicle positions and license plate numbers, are saved into a CSV file for further analysis or reporting.This solution demonstrates how object detection, tracking, and OCR can be combined effectively for intelligent traffic monitoring and surveillance applications.',
    technologies: [
      'Python',
      'YOLOv8 (Ultralytics)',
      'OpenCV (cv2)',
      'SORT',
      'NumPy',
      'Tesseract OCR',
      'BeautifulSoup (optional)',
      'Pandas / CSV Module',
    ], 
    url: 'https://github.com/Areeb3176/Number-Plate-Detection',
    image:'a.jpg'
  }
];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black/80"></div>
        
        {/* Video Frame Background */}
        <div className="absolute inset-0">
          <img 
            src="/videoframe_5041.png" 
            alt="Space Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Moving Stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-star-move"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            <div 
              className="w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          </div>
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
              animationDuration: '3s'
            }}
          >
            <div className="w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Center Navigation */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20">
              {[
                { name: 'About', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 ${
                    activeSection === item.id ? 'bg-purple-500/50 text-white' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a               
            href="https://www.linkedin.com/in/muhammad-areeb-khan-a09564360"
            target="_blank"
            rel="noopener noreferrer"               
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-blue-600/50 transition-all duration-300 hover:scale-110"             
>               
            <Linkedin className="w-5 h-5" />             
            </a>
            <a
              href="https://github.com/Areeb3176"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Muhammad Areeb Khan
            </h1>
            <p className="text-lg md:text-xl text-white-300 mb-4 animate-fade-in-up animation-delay-300">
              AI Engineer, Data Scientist, IT Support & AI Enthusiast
            </p>
            <p className="text-base md:text-lg text-white-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              Passionate about creating intelligent solutions through artificial intelligence, machine learning, and data science. 
              Transforming complex data into actionable insights and building the future with AI.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-900">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-white-400 text-lg">Technologies and tools I work with</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-2xl text-white">
                    {skill.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor Of Science in Artificial Intelligence</h3>
                  <p className="text-purple-400 font-semibold mb-2">2021-2025 | Dawood University of Engineering & Technology Karachi</p>
                  <p className="text-white-300 leading-relaxed">
                    Specialized in Data Analytics, Natural Language Processing Engineering, AI Engineering, 
                    Data Mining and Analysis, Machine Learning Engineering, Deep Learning Engineering, and Information Technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Intermediate in Computer Science</h3>
                  <p className="text-blue-400 font-semibold mb-2">2019-2021 | Govt. For Men College</p>
                  <p className="text-white-300 leading-relaxed">
                    Foundation in computer science principles, programming fundamentals, and mathematical concepts.
                  </p>
                </div>
              </div>
            </div>
             <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-black-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Virtual Intership</h3>
                  <p className="text-blue-400 font-semibold mb-2"> 2024 | Codeaplha</p>
                  <p className="text-white-300 leading-relaxed">
                   I’m glad to share that I’ve started a remote internship in Data Science and have officially received the offer letter. Looking forward to learning, growing, and gaining hands-on experience in real-world data project.                  </p>
                  <button 
                  onClick={() => window.open('https://www.linkedin.com/in/muhammad-areeb-khan-a09564360/details/certifications/1751927249712/single-media-viewer/?profileId=ACoAAFnIgqkB0ZN3nV_EhXjgIdW35qmbYB7JnoQ', '_blank')}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
>
                  <span>Visit Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Certifications Section */}
<section id="certifications" className="py-20 relative z-10 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Certifications
      </h2>
      <p className="text-white-400 text-lg">Professional certifications and achievements</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
          <p className="text-white-400 mb-4">{cert.provider}</p>
          
          <button 
            onClick={() => window.open(cert.url, '_blank')}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >              
            <span>Visit</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="py-20 relative z-10 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h2>
      <p className="text-white-400 text-lg">Showcasing my latest work and innovations</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-4xl opacity-50">🚀</div>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-white-400 mb-4">{project.description}</p>
          
          {/* Technologies Section - Two Column Layout */}
          {project.technologies && (
            <div className="mb-4">
              <h4 className="text-x1 font-semibold text-white mb-3">Technologies:</h4>
              <div className="grid grid-cols-2 gap-y-1 text-x1 text-white-300">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            onClick={() => window.open(project.url, '_blank')}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-purple-500/25"
          >
            <span>Visit</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative z-10 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">Let's connect and discuss opportunities</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-white-400 text-sm">m.areeb3173@gmail.com</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-black-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Github</h3>
                <p className="text-white-400 text-sm">Areeb3176</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-200 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Linkedin</h3>
                <p className="text-white-400 text-sm">https://www.linkedin.com/in/muhammad-areeb-khan-a09564360/</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Muhammad Areeb Khan. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
