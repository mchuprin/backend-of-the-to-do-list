const Task = require ('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
    Task.find().then(result => {
        res.send({data: result});
    });
};

module.exports.createNewTask = (req, res, next) => {
    const body = req.body;
    const task = new Task({
        text: body.text,
        isCheck: false,
        id: body._id
    });
    task.save().then(result => {
        res.status(200).send(result);
    });
};
    
module.exports.changeTaskText = (req, res, next) => {
    const body = req.body;
    const filter = {_id: body.id};
        Task.updateOne(filter,{
            $set: {text: body.text}
        }).then(result => {
            res.status(200).send(result);
        });
    };
    
module.exports.changeIsCheck = (req, res, next) => {
    const body = req.body;
    const filter = {_id: body.id};
    Task.updateOne(filter,{
        $set: {isCheck: body.isCheck}
    }).then(result => {
        res.status(200).send(result);
    });
};
    
module.exports.deleteTask = (req, res, next) => {
    const _id = req.query._id;
    const filter = {_id: _id};
    Task.deleteOne(filter).then(result => {
        res.status(200).send(result);
    });
};