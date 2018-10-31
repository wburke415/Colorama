import React from 'react';

class Splash extends React.Component {

  constructor(props) {
    super(props);
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
  }

  render() {
    return (
      <section className="splash" data-type="background" data-speed="3">
        <div className="splash-title">
          {/* <div>An interactive experience</div> */}
    
          <img src={window.logo}/>
          <div><a href="https://www.showclix.com/event/colorama">Comprar entradas aquí</a></div>
        </div>
      </section>
    );
  }
}

export default Splash;