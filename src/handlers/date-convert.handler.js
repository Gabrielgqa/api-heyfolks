class DateConvertHandler {
    static async convert(date) {
        var day  = date.split("/")[0];
        var month  = date.split("/")[1];
        var year  = date.split("/")[2];
      
        return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);
    }
}

module.exports = DateConvertHandler