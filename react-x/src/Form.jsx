import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", disabled: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.inputRef = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    event.target.value === "реакт"
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
  }

  handleFocus() {
    this.inputRef.current.focus();
  }

  handleDelete(event) {
    event.target.remove();
  }

  

  componentDidMount() {
    console.log("DID MOUNT")
}

componentDidUpdate() {
    console.log("DID UPDATE")
}

componentWillUnmount() {
    console.log("WILL Unmount")
}

shouldComponentUpdate(){
    console.log("SHOULD?")
    return true;
}

getSnapshotBeforeUpdate(){
    console.log("SNAPSHOT")
}

  render() {
    console.log("RENDER")
    return (
      <>
        <form>
          <label>
            Введите логин:
            <input
              type="text"
              name="name"
              placeholder="E-mail"
              value={this.state.value}
              onChange={this.handleChange}
              ref={this.inputRef}
            />
          </label>
          <input
            type="submit"
            value="Отправить"
            disabled={this.state.disabled}
          />
          <input type="button" value="Фокус" onClick={this.handleFocus} />
          <input type="button" value="Удалить себя" onClick={this.handleDelete} />
        </form>
      </>
    );
  }
}

export default Form;
