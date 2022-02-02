const readline = require('readline')
require('colors')

const showMenu = () => {
  return new Promise(resolve => {
    console.clear()
    console.log('======================='.green)
    console.log(' Seleccione una opción '.green)
    console.log('=======================\n'.green)
    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tareas`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir\n`)

    const rl = readline.createInterface(process.stdin, process.stdout)

    rl.question('Seleccione una opción: ', opt => {
      rl.close()
      resolve(opt)
    })
  })
}

const pause = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface(process.stdin, process.stdout)
    const str = `\nPresione ${'ENTER'.green} para continuar\n`
    rl.question(str, () => {
      rl.close()
      resolve()
    })
  })
}

module.exports = { showMenu, pause }
