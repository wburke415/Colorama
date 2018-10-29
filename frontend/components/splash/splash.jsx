import React from 'react';

const Splash = () => (
  <main>
    <div className="splash-title">
      {/* <div>An interactive experience</div> */}

      <img src={window.logo}/>
      <div><a href="https://www.showclix.com/event/colorama">Purchase Tickets Here</a></div>
    </div>
  </main>
);

export default Splash;