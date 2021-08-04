# React TODO application
<p>
  <a href="https://gitpod.io#https://github.com/4GeeksAcademy/react-hello.git"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>

Create a TODO list application that allows users to add and delete tasks. Then, we will sync our todo list with a real database, using the following RESTful and public API made for this exercise.

**Instructions**
- The tasks are added when the user press enter on the keyboard or you can have your own button.
- The delete icon shows only when the task is hovered.
- The use can add as many tasks as it wants.
- When there is no tasks the list should "No tasks, add a task"
- There is no way to update a task, the user will ahve to delete and create again.

- Make your to-do list sync with the backend API every time a task is added or deleted.
- Add a clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.

There are 3 critical moments in the application timeline (a.k.a. The runtime) to focus on your integration:

- After the list loads empty for the first time: you should fetch (GET) the data from the API and update the tasks when the information finally arrives.
- When a new task is added: You should PUT the new list on the server.
- When a task is deleted: You should PUT the new list on the server.

💡 **Tips to finish this project**
Do not go straight to the code, think first and have a viable trategy.
- What components will you create? Draw the project on a white paper and identify components.
- Where are the stasks going to be stored in your component?
- Read about controlled components inputs in react.js, you will need to understand the concept.