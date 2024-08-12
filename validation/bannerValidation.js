const { options } = require("../routes/banner");
const { query,body,param,matchedData,validationResult ,checkSchema} = require('express-validator');


const bannerSchemaValidate = {
    description: {
       notEmpty:{
        errorMessage:"description is required"
       }
    },
    timer:{
      notEmpty:{
        errorMessage:"timer is required"
      },
      isInt:{
        options:{min:1},
        errorMessage:"timer should be greater than 0"
      }
    },
    isVisible: {
        notEmpty: {
            errorMessage: "isVisible cannot be empty",
        },
        isBoolean: {
            errorMessage: "isVisible must be a boolean",
        },
    },

}


module.exports=bannerSchemaValidate;
// description,
// timer,
// isVisible