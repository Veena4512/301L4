/* eslint-disable no-undef */
const todoList = () => {
  // eslint-disable-next-line no-undef
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    const o = [];
    const yesterday = new Date(Date.now() - 864e5);
    all.forEach((element) => {
      const date = JSON.stringify(yesterday).substring(1, 11);
      if (element.dueDate === date) {
        o.push(element);
      }
    });
    return o;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    const d= [];
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
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
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
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    var s = "";
    for (var i = 0; i < list.length; i++) {
      if (i > 0) {
        s += "\n";
      }
      if (list[i].completed != true) {
        s += "[ ] ";
      } else {
        s += "[x] ";
      }
      var t = new Date(Date.now());
      var d = JSON.stringify(t).substring(1, 11);
      if (list[i].dueDate == d) {
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

module.exports=todoList;
