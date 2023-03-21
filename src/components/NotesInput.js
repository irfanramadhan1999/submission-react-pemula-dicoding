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
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes({ title: this.state.title, body: this.state.body });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form className="form-input" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            placeholder="Ini adalah judul ..."
          />

          <textarea
            type="text"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            class="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
          />
          <button type="submit"> Buat </button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
