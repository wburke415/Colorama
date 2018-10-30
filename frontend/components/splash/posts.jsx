import React from 'react';

const Posts = () => (
  <section>
    <div className="post" id="about">

      <div>
        <h1>A world inspired by the colors and magic that shines from you</h1>
        <p>Colorama is a temporary interactive experience specially designed for the city of Barcelona.</p>
        <p>You are invited to explore and share your true colors in this fantasy world!</p>
      </div>

      <img src={window.post1} />
    </div>

    <div className="post" id="faq">

      <img src={window.post2} />

      <div>
        <p>TICKET PRICE 26€</p>
        <p>OPEN UNTIL 15 DECEMBER</p>
        <p>PASSEIG DE GRÁCIA, 114 BARCELONA 08008</p>
        <p>OPEN DAILY 11:00 - 21:00</p>
      </div>
    </div>
  </section>
);    

export default Posts;