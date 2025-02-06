import vine from '@vinejs/vine'

export const TaskValidator = vine.compile(vine.object({
    titulo: vine.string(),
    descripcion: vine.string(),
    estado: vine.boolean()
}))