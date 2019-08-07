
function sendMessageToMkr(msg){
    console.log("send message "+ msg +" to MKR");
};

function getData(){
    return Math.random();
};

module.exports.sendMessageToMkr= sendMessageToMkr;
module.exports.getData = getData;