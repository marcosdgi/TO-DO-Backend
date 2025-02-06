import router from "@adonisjs/core/services/router";

export const task = router.group(() => {
    router.get('/', "#controllers/task/tasks_controller.index")
    router.get('/:taskId', '#controllers/task/tasks_controller.ById')
    router.post('/store', '#controllers/task/tasks_controller.store')
    router.patch('/update/:taskId', '#controllers/task/tasks_controller.update')
    router.delete('delete/:taskId', '#controllers/task/tasks_controller.delete')
}).prefix('api/v1')

