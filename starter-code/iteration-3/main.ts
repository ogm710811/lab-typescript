// Add the reference to the interface
import { TodoItemInterface } from "./interfaces";
import { ForTodoInterface  } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: string;
    taskStatus: boolean;
    updatedAt: Date;

    constructor(title : string){
        this.title = title;
        this.taskStatus = false;
        this.updatedAt = new Date();
    }

    toggleStatus(){
        if (!this.taskStatus) {
            this.taskStatus = true;
            this.updatedAt = new Date();
        }
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements ForTodoInterface{
    tasks: Array<TodoItem> = [];

    addTask( taskToInsert ) {
        this.tasks.push( taskToInsert );
        console.log(`Task ${taskToInsert} inserted in the list`);
        return (this.tasks.length);
    }

    listAllTasks() {
        console.log('*********** LIST ALL TASK ****************');
        this.tasks.forEach(oneTask => {
            console.log(oneTask);
        });    
    }

    deleteTask( taskToDelete ) {
        var index = this.tasks.indexOf(taskToDelete);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log(`Task ${taskToDelete} deleted from the list`);
        return (this.tasks.length);
    }

    listUncomplete() {
        console.log('*********** LIST UNCOMPLETE TASK ****************');
        this.tasks.forEach(oneTask => {
            if (!oneTask.taskStatus) {
                console.log(oneTask);
            }
        });    
    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
