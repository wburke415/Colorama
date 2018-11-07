import React from 'react';

const BACKGROUND_IMAGES = [window.splash1, window.splash2, window.splash3];

class Splash extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bgImage: 1
    }
  }

  componentDidMount() {
    $(function () {

      // Cache the window object
      const $window = $(window);

      // Parallax background effect
      $(`section[data-type='background']`).each(function () {

        const $bgobj = $(this);

        $(window).scroll(function () {

          // scroll the background at var speed
          // the yPos is a negative value because we're scrolling it UP!

          const yPos = -($window.scrollTop() / $bgobj.data('speed'));

          // Put together our final background position
          const coords = '50% ' + yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });

        }); // end window scroll

      });

    });

    let background = $('#splash');
    background.css("background-image", `url(${BACKGROUND_IMAGES[0]})`);

    setInterval(() => {
      background.css('background-image', `url(${BACKGROUND_IMAGES[this.state.bgImage]})`);

      if (this.state.bgImage >= BACKGROUND_IMAGES.length - 1) {
        this.setState({bgImage: 0});
      } else {
        this.setState({bgImage: this.state.bgImage + 1});
      }

    }, 4000)


  }

  render() {
    return (
      <section id="splash" data-type="background" data-speed="2">
        <div className="splash-title">
          {/* <div>An interactive experience</div> */}
    
          <img src={window.logo}/>
          <div><a href="https://www.showclix.com/event/colorama">Comprar entradas aquí</a></div>
          <p class="charity">El 10% de los beneficios van a caridad.</p>
        </div>
      </section>
    );
  }
}

export default Splash;