import React from 'react';

const Posts = () => (
  <section>
    <div className="post" id="about">

      <div>
        <h1>Un mundo inspirado en los colores y la magia que brilla en ti.</h1>
        <p>Colorama es una experiencia interactiva temporal especialmente diseñada para la ciudad de Barcelona.</p>
        <p>¡Te invitamos a explorar y compartir tus verdaderos colores en este mundo de fantasía!</p>
      </div>

      <img src={window.post1} />
    </div>

    <div className="post" id="faq">

      <img src={window.post2} />

      <div>
        <p>PRECIO DE ENTRADA 26€</p>
        <p>ABIERTO HASTA EL 15 DE DICIEMBRE</p>
        <p>PASSEIG DE GRÁCIA, 114 BARCELONA 08008</p>
        <p>ABIERTO TODOS LOS DÍAS 11:00 - 21:00</p>
      </div>
    </div>
  </section>
);    

export default Posts;