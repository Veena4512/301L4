const { CommandCompleteMessage } = require("pg-protocol/dist/messages");
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
describe("Todolist Test Suite", () => {
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );

  test("creating a new todo", () => {
    var todoItemsCount = all.length;
    expect(todoItemsCount).toBe(0);
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should add new todo", () => {
    var todoItemsCount = all.length;
    add({
      title: "Submit assignment",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(todoItemsCount + 1);

    todoItemsCount = all.length;
    add({
      title: "Pay rent",
      completed: true,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);

    todoItemsCount = all.length;
    add({
      title: "Service Vehicle",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);

    todoItemsCount = all.length;
    add({
      title: "File taxes",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoItemsCount + 1);

    todoItemsCount = all.length;
    add({
      title: "Pay electric bill",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("marking a todo as completed", () => {
    for (var i = 0; i < all.length && all[i].completed == false; i++) {
      expect(all[i].completed).toBe(false);
      markAsComplete(i);
      expect(all[i].completed).toBe(true);
    }
  });

  test("retrieval of overdue items", () => {
    all.forEach((element) => {
      if (element.dueDate == yesterday && element.completed == false) {
        expect(element.dueDate).toBe(yesterday);
        expect(element.completed).toBe(false);
      }
    });
  });

  test("retrieval of due today items", () => {
    all.forEach((element) => {
      if (element.dueDate == today && element.completed == false) {
        expect(element.dueDate).toBe(today);
        expect(element.completed).toBe(false);
      }
    });
  });

  test("retrieval of due later items", () => {
    all.forEach((element) => {
      if (element.dueDate == tomorrow && element.completed == false) {
        expect(element.dueDate).toBe(tomorrow);
        expect(element.completed).toBe(false);
      }
    });
  });

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
      if (list[i].dueDate == today) {
        s += list[i].title;
      } else {
        s += list[i].title + " " + list[i].dueDate;
      }
    }
    return s;
  };

  toDisplayableList(all);
});