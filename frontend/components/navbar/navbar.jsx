import React from 'react';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let about = document.getElementById('about-nav');
    let insta = document.getElementById('insta-nav');
    let faq = document.getElementById('faq-nav');
    let contact = document.getElementById('contact-nav');

    about.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' })
    });

    insta.addEventListener('click', () => {
      document.getElementById("insta").scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    faq.addEventListener('click', () => {
      document.getElementById("faq").scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    contact.addEventListener('click', () => {
      document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  handleScroll() {
    const windowPos = window.scrollY;
    const postPos = $(".post").position().top;

    const navbar = document.getElementById('navbar');
    const blackText = Array.from(navbar.classList).includes('black-text');

    if (windowPos >= postPos && !blackText) {
      navbar.classList.add('black-text');
    } else if (windowPos < postPos && blackText) {
      navbar.classList.remove('black-text');
    }
  }
  
  render() {
    return (
      <nav id="navbar">
        <a id="about-nav">about</a>
        <a href="https://www.showclix.com/event/colorama" target="_blank">tickets</a>
        <a id="insta-nav">Colorama</a>
        <a id="faq-nav">faq</a>
        <a id="contact-nav">contact</a>
      </nav>
    );
  }
}

export default Navbar;