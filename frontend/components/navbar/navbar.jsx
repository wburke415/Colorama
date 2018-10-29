import React from 'react';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
        <a>about</a>
        <a href="https://www.showclix.com/event/colorama">tickets</a>
        <a>Colorama</a>
        <a>faq</a>
        <a>contact</a>
      </nav>
    );
  }
}

export default Navbar;