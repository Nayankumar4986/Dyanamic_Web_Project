const mongoose = require("mongoose")
const Detail=mongoose.Schema({
    brandname:String,
    brandIconurl:String,
    links:[{
        label:String,
        url:String,
    },
],
});

module.exports=mongoose.model("detail",Detail)

