import React from 'react';

class Contact extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMailingList(this.state);
  }

  render() {
    return (
      <section>
        
        <div className="middle">
          <h1>Sign up for our newsletter!</h1>

          <form onSubmit={this.handleSubmit} >
            <input type="email" required placeholder="Email address" onChange={this.handleInput} />
            <input type="submit" value="subscribe!" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;