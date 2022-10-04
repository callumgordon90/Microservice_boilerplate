

const data = (callback) =>
{
    MyModel.find().then(function(result){
        console.log(result);
        //return(result);
        callback(results);//we pass in a function which will be used to pull out 
        //data
    });
}

exports.data = data