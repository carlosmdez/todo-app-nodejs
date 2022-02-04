require('colors')

const { showMenu, pause, readInput, showListToDelete } = require('./helper/inquirer')
const {saveDB, readDB} = require('./helper/db-handler')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

const main = async () => {
  let opt = ''
  const tasks = new Tasks()

  const tasksSaved = readDB()

  if (tasksSaved) {
    tasks.loadTasksFromArr(tasksSaved)
  }

  do {
    opt = await showMenu()

    switch (opt) {
      case 1:
        const desc = await readInput('Descripción: ')
        tasks.addTask(desc)
        saveDB(tasks.listArr)
        break
      case 2:
        tasks.formatCompleteList()
        break
      case 3:
        tasks.formatList(true)
        break
      case 4:
        tasks.formatList(false)
        break
      case 5:
        saveDB(tasks.listArr)
        break
      case 6:
        const taskId = await showListToDelete(tasks.listArr)
        console.log(taskId);
        // saveDB(tasks.listArr)
        break
      default:
        break
    }

    if (opt !== 0) await pause()
  } while (opt !== 0)
}

main()
