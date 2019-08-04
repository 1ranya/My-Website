import React, { Component } from "react";
import "../css/myHelper.css";
class MyHelper extends Component {
  state = {
    show: "",
    showElement: "",
    hideConfirm: ""
  };

  render() {
    return (
      <section class="hero is-fullheight">
        <div className=" hero-body myHelperBody columns">
          <div className="collumn is-one-quarter left">
            <div className="field has-addons">
              <label className="label showListLabel"> Search</label>
              <input
                className="input searchInput"
                placeholder="Find your list"
              />
            </div>

            <div className="field is-horizontal addListFeild">
              <label className="label addListLabel"> Add list</label>
              <button
                className="button addListBtn"
                onClick={() => {
                  var showNewList = " show";
                  this.setState({ show: showNewList });
                  console.log(this.state.showNewList);
                }}
              >
                {" "}
                <span className="plus">+</span>
              </button>
              <button
                className={"button addListBtn hidden" + this.state.show}
                onClick={() => {
                  this.setState({ show: "" });
                  this.setState({ showElement: "" });

                  console.log(this.state.showNewList);
                }}
              >
                <span className="plus">-</span>
              </button>
            </div>
            <div className={"hidden addListGlobalForm " + this.state.show}>
              <div className="field addListForm">
                <label className="label addListLabel">List Name</label>
                <input
                  className="input addListinput"
                  placeholder="Choose a meaningful name"
                />
              </div>
              <div className="field is-horizontal addListForm">
                <label className="label addListElementLabel">
                  Add list element
                </label>
                <button
                  className="button addListElementBtn"
                  onClick={() => {
                    var showElement = "showElement";
                    this.setState({ showElement });
                  }}
                >
                  <span className="plus">+</span>
                </button>
                <button className="button confirmBtn">
                  <i class="fas fa-check-circle" />
                </button>
              </div>
            </div>

            <div
              className={
                "elementHidden addElementGlobalForm " + this.state.showElement
              }
            >
              <div className="field addListForm">
                <label className="label addListLabel"> Element name</label>
                <input
                  className="input addListinput"
                  placeholder="Choose a meaningful name"
                />
              </div>
              <div className="field is-horizontal addListForm">
                <button className="button confirmBtn elementValid">
                  <i className="fas fa-check-circle" />
                </button>
              </div>
            </div>
          </div>
          <div className="collumn right">
            <h1>TO DOs</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default MyHelper;
