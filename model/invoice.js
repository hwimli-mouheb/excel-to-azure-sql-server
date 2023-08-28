const Joi = require('joi');

const invoiceShema = Joi.object({
    Entity: Joi.string().required(),
    'Invoice Number': Joi.string().required(),
    Date: Joi.date().required(),
    Payment: Joi.date(),
    'Sent to/Paid by': Joi.string().required(),
    Description: Joi.string().required(),
    Project: Joi.string().required(),
    'Invoice Gross (incl. VAT)': Joi.number().required(),
    'Invoiced Net': Joi.number().required(),
    Comments : Joi.string().required(),
    Received: Joi.number().required(),
    Description: Joi.string().required(),
    __EMPTY : Joi.any()
});

exports.invoiceShema = invoiceShema;