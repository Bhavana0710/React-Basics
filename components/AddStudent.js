import React from "react";

class AddStudent extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addDetailHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
    // console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        {/* <br></br>
        <br></br> */}
        <h2>Add Student </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;