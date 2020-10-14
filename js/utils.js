/**
 * isEmpty 
 * 
 */
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
}

 /**
 * Format String 
 * "Hello, {0}! My name is {1}.".format("World", "Drion")
*/
String.prototype.format = function () {
    const fmt = this; 
    if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
        throw new Error('The format string is invalid.');
    }
    return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
        if (str) {
            return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
        } else {
            if (index >= arguments.length) {
                throw new Error('The index is out of range in format!');
            }
            return arguments[index];
        }
    });
}


 /**
 * Convert date String format dd/mm/yyyy 
 * To Date @DATE
 */
String.prototype.convertToDate = function() {
    return new Date(this.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
}


 /*
var formartDate = function(dt, format){
    var dt = new Date();
   let format = `[month]/[year]`;
   
    const year = new Intl.DateTimeFormat($translate.use(), { year: 'numeric' }).format(dt);
    const month = new Intl.DateTimeFormat($translate.use(), { month: '2-digit' }).format(dt);
    const day = new Intl.DateTimeFormat($translate.use(), { day: '2-digit' }).format(dt);
    const monthLong = new Intl.DateTimeFormat($translate.use(), { month: 'long' }).format(dt);
    const monthShort = new Intl.DateTimeFormat($translate.use(), { month: 'short' }).format(dt);
let res = format.replace(']','}').replace('[','${');
return format;

   if (format === "dd/mm/yyyy" || format == undefined)
        return `${day}/${month}/${year}`.replace('.', '').toUpperCase();
    if (format === "mm/yyyy")
        return `${monthShort}/${year}`.replace('.', '').toUpperCase();
    if (format === "month/yyyy")
        return `${monthLong}/${year}`.replace('.', '').toUpperCase();
};
*/

