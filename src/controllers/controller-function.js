module.exports = (model)=>{
    return async(req,res)=>{
        try {
            const fetchedData = await model.find().lean();
            return res.send(fetchedData);
        } catch (error) {
            return res.send(error.message);
        }
    }
}