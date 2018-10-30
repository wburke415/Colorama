import React from 'react';

class Contact extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subscribed: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMailingList({ email: this.state.email })
    .then(() => {
      if (Object.values(this.props.mailingList).includes('Success')) {
        this.setState({ subscribed: true });
      }
    });
  }

  render() {
    return (
      <section id="contact">

        <div className="top">
          <i className="far fa-envelope"></i>
          
          <div className="middle">
            <h1>Sign up for our newsletter!</h1>

            <form onSubmit={this.handleSubmit} >
              <input type="email" required placeholder="Email address" onChange={this.handleInput} />
              <input type="submit" value="subscribe!" />
            </form>
          </div>

          <i className="far fa-envelope"></i>
        </div>

        <div className="bottom">
          <h1>PASSEIG DE GRÁCIA, 114 BARCELONA 08008</h1>

          <span className="links">
            <a href="mailto:info@coloramabcn.com">email</a>
            <span>|</span>
            <a href="https://www.instagram.com/coloramabcn/" target="_blank">instagram</a>
            <span>|</span>
            <a href="https://www.showclix.com/event/colorama" target="_blank">tickets</a>
          </span>

          {/* <p id="copyright">&copy; Derechos de Autor 2018 Colorama. Todos los derechos reservados.</p> */}
        </div>

      </section>
    );
  }
}

export default Contact;