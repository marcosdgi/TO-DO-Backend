import Task from '#models/Task/task'
import { TaskValidator } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {

    async index({ response }: HttpContext) {
        const tasks = await Task.all()
        return response.status(200).send(tasks)
    }
    async byId({ params, response }: HttpContext) {
        const taskId = params.taskId
        const task = await Task.findOrFail(taskId)
        return response.status(200).send(task)
    }

    async store({ request, response }: HttpContext) {
        const validatedData = await TaskValidator.validate(request.all())
        const newTask = await Task.create({
            titulo: validatedData.titulo,
            descripcion: validatedData.descripcion,
            estado: validatedData.estado
        })
        if (!newTask) return response.status(400)
        return response.status(200).send(newTask)
    }

    async update({ params, request, response }: HttpContext) {
        const taskId: number = params.taskId
        const validatedData = await TaskValidator.validate(request.all())
        const task = await Task.findOrFail(taskId)
        const updatedTask = await task.merge(validatedData).save()
        if (!updatedTask) return response.status(400)
        return response.status(200).send(updatedTask)
    }

    async delete({ params, response }: HttpContext) {
        const taskId: number = params.taskId
        const task = await Task.findOrFail(taskId)
        await task.delete()
        return response.status(200).send(task)
    }
}