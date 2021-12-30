const Task = require ('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
    Task.find().then(result => {
        res.send(result);
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
    })
    .catch(err => {
        res.status(500).send(err)
    });
};
    
module.exports.changeTaskText = (req, res, next) => {
    const body = req.body;
    const selector = {_id: body._id};
        Task.updateOne(selector,{
            $set: {text: body.text}
        }).then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send(err)
        });
    };
    
module.exports.changeIsCheck = (req, res, next) => {
    const body = req.body;
    const selector = {_id: body._id};
    Task.updateOne(selector,{
        $set: {isCheck: body.isCheck}
    }).then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send(err)
    });
};
    
module.exports.deleteTask = (req, res, next) => {
    const _id = req.query._id;
    const selector = {_id: _id};
    Task.deleteOne(selector)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send(err)
    });
}; 