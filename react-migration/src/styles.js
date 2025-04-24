/**
 * Shared styles for the portfolio website
 */

export const styles = `
  body {
    background-color: #f8f9fa;
    color: #1a202c;
  }
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .image-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .image-container:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }
  .overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .fade-in {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .section-heading {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .section-heading:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: #e53e3e;
  }
  .nav-link {
    position: relative;
    transition: color 0.3s ease;
  }
  .nav-link:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e53e3e;
    transition: width 0.3s ease;
  }
  .nav-link:hover:after, .nav-link.active:after {
    width: 100%;
  }
  .social-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .social-icon:hover {
    transform: translateY(-3px);
    color: #e53e3e;
  }
  .expertise-card {
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
  }
  .expertise-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border-color: #e53e3e;
  }
  .contact-card {
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
  }
  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const tailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#2d3748',
          accent: '#e53e3e',
          light: '#f7fafc',
          dark: '#1a202c'
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Open Sans', 'sans-serif'],
        }
      }
    }
  }
`;

export default styles; 