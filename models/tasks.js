const Task = require('./task')
require('colors')

class Tasks {
  constructor() {
    this.list = {}
  }

  addTask(desc = '') {
    const task = new Task(desc)
    this.list[task.id] = task
  }

  deleteTask(id) {
    if (!this.list[id]) return
    delete this.list[id]
  }

  loadTasksFromArr(tasks = []) {
    tasks.forEach(task => {
      this.list[task.id] = task
    })
  }

  get listArr() {
    const arr = []
    Object.keys(this.list).forEach(key => {
      const task = this.list[key]
      arr.push(task)
    })
    return arr
  }

  formatCompleteList() {
    let str = ''
    this.listArr.forEach((el, i) => {
      const idx = `${i + 1}.`.green
      const status = el.doneDate ? 'Done'.green : 'Pending'.red
      str += `${idx} ${el.description} :: ${status}\n`
    })
    console.log(str)
  }

  formatList(isDone) {
    let str = ''
    const func = isDone ? e => e.doneDate : e => !e.doneDate
    const data = this.listArr.filter(func)
    data.forEach((el, i) => {
      const idx = `${i + 1}.`.green
      const status = isDone ? el.doneDate.green : 'Pending'.red
      str += `${idx} ${el.description} :: ${status}\n`
    })
    console.log(str)
  }
}

module.exports = Tasks
