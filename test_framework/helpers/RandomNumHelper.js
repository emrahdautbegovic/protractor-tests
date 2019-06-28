var RandomNumHelper = function() {
    // creating random 8 digit number
    this.getRandom8DigitNum = function() {
        var rand = Math.random();
        while(rand < 0.1){
            rand = Math.random();
        }
        var num = Math.ceil(rand * 99999999);
        return num;
    };
  };
  
  module.exports = new RandomNumHelper();