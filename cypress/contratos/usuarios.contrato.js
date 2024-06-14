const Joi = require ('joi')

const usuariosSchema = Joi.object({
    
    usuarios: Joi.array().items({
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrados: Joi.string(),
        _id: Joi.string()
    }),
    quantidade: Joi.number()
})
export default usuariosSchema;