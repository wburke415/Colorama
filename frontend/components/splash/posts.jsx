import React from 'react';

const Posts = () => (
  <section>
    <div className="post" id="about">
      <div>
        <h1>Un mundo inspirado en los colores y la magia que brilla en ti.</h1>
        <p>
          Colorama es una experiencia interactiva temporal especialmente
          diseñada para la ciudad de Barcelona.
        </p>
        <p>
          ¡Te invitamos a explorar y compartir tus verdaderos colores en este
          mundo de fantasía!
        </p>
      </div>

      <img src={window.post1} />
    </div>

    <div className="post">
      <img src={window.post2} />

      <div>
        <p>PRECIO DE ENTRADA 15€</p>
        <p>ABIERTO HASTA EL 15 DE DICIEMBRE</p>
        <p>PASSEIG DE GRÁCIA, 114 BARCELONA 08008</p>
        <p>MARTES-VIERNES 16:00-21:00</p>
        <p>SABADO Y DOMINGO 12:00-21:00</p>
      </div>
    </div>

    <div className="post" id="faq">
      <div>
        <p>
          ¿Qué es? <br/><br/>
          ¡Colorama es un museo "pop-up" envolvente con 10 habitaciones
          de diseño vibrante, cada una con una interacción única y algunas
          delicias especiales en el camino! <br/><br/>
          Echa un vistazo a un video de
          nuestra fiesta de apertura a continuación!
        </p>
      </div>

      <section>
        <video width="90%" controls>
          <source src={window.faqVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>

    <div className="news-post">
      <h1>Colorama en las noticias</h1>

      <div className="news-content">
        <a href="https://www.timeout.cat/barcelona/ca/que-fer/colorama" target="_blank">
          <img className="timeout-logo" src={window.timeoutLogo} />
        </a>

        <a href="https://beteve.cat/cultura/colorama-galeria-comas" target="_blank">
          <img className="beteve-logo" src={window.beteveLogo} />
        </a>
      </div>
    </div>
  </section>
);    

export default Posts;