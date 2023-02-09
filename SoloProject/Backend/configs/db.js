const mongoose=require("mongoose")



const connection=mongoose.connect("mongodb+srv://rautmahi:rautmahi@cluster0.nq4x79s.mongodb.net/onlineshop?retryWrites=true&w=majority")

module.exports={
    connection
}

