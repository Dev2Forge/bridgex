import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ScreenshotsSection.css';

const screenshots = [
  {
    url: 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-1-main.png',
    title: 'Main Window'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-2-openfile.png',
    title: 'Open File'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-3-minieditor.png',
    title: 'Mini Editor'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-4-convert.png',
    title: 'Convert'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-5-languagechange.png',
    title: 'Change Language'
  }
];

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="screenshots-section section">
      <div className="container">
        <div className="section-title">
          <h2>Screenshots</h2>
          <p>See Bridgex in action</p>
        </div>

        <div className="screenshots-carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            <div 
              className="carousel-slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="carousel-slide">
                  <div className="screenshot-container glass-card">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.title}
                      className="screenshot-image"
                      loading="lazy"
                    />
                  </div>
                  <p className="screenshot-title">{screenshot.title}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={next} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
