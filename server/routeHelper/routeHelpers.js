
const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    authSchema: Joi.object().keys({
      name: Joi.string(),  
      email: Joi.string().email().required(),
      username: Joi.string(),
      password: Joi.string().required()
    }),
    signinSchema : Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    }),
    profileSchema : Joi.object().keys({
      name: Joi.string(), 
      lastName: Joi.string(),  
      email: Joi.string().email().required(),
      username: Joi.string(),
      date_of_birth: Joi.string().required(),
      gender: Joi.string(),
      created_at: Joi.date(),
      userLocation: Joi.string(),
      role: Joi.string(),
      profession_id: Joi.string(),
      activity_id: Joi.string(),
      created_campaign:Joi.string(),
      rating: Joi.number(),
      avatar: Joi.object()
    })
  }

}