import React, { Component } from "react";
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";

class TodoRedux extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoRedux;
