/* eslint-disable no-undef */
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const od = [];
      const yesterday = new Date(Date.now() - 864e5);
      all.forEach((element) => {
        const date = JSON.stringify(yesterday).substring(1, 11);
        if (element.dueDate === date) {
          od.push(element);
        }
      });
      return od;
    };
  
    const dueToday = () => {
      const d = [];
      const today = new Date(Date.now());
      all.forEach((element) => {
        const date = JSON.stringify(today).substring(1, 11);
        if (element.dueDate === date) {
          d.push(element);
        }
      });
      return d;
    };
  
    const dueLater = () => {
      const l = [];
      const tomorrow = new Date(Date.now() + 864e5);
      all.forEach((element) => {
        const date = JSON.stringify(tomorrow).substring(1, 11);
        if (element.dueDate === date) {
          l.push(element);
        }
      });
      return l;
    };
  
    const toDisplayableList = (list) => {
      var s = "";
      for (var i = 0; i < list.length; i++) {
        if (i > 0) {
          s += "\n";
        }
        if (list[i].completed == true) {
          s += "[x] ";
        } else {
          s += "[ ] ";
        }
        var today = new Date(Date.now());
        var date = JSON.stringify(today).substring(1, 11);
        if (list[i].dueDate == date) {
          s += list[i].title;
        } else {
          s += list[i].title + " " + list[i].dueDate;
        }
      }
      return s;
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;