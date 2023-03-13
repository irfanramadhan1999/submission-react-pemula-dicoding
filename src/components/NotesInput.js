import React from "react";


class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.state(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.state(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form className="form-input">
        <input type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Ini adalah judul ..." />
        <input type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Tuliskan catatanmu di sini ..." />
        <button type="submit"> Buat </button>
      </form>
    );
  }
}


export default NotesInput;