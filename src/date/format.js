let locale = getLocale();

/**
 * Get formatted string from this date object.
 * @public
 * @param {Date} date - Date object to use
 * @param {String} formatStr - Format string eg. yyyy-MM-dd HH:mm:ss
 * @returns {String}
 */
const format = (date, formatStr) => {
    //Split on specifiers. Keep delimiters.
    const formatArr = formatStr.split(/(yyyy|yyy|yy|y|MMMM|MMM|MM|M|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|fff|ff|f|tt|t)/gm);
    const out = [];
    let index = -1;
    for (let i = 0; i < formatArr.length; ++i) {
        switch (formatArr[i]) {
            //YEAR
            case "y":
                out[++index] = (date.getFullYear() % 100).toString();
                break;
            case "yy":
                out[++index] = ("0" + (date.getFullYear() % 100).toString()).slice(-2);
                break;
            case "yyy": {
                let year = date.getFullYear().toString();
                out[++index] = year.length > 2 ? year : ("00" + year).slice(-3);
                break;
            }
            case "yyyy":
                out[++index] = ("000" + date.getFullYear()).slice(-4);
                break;

            //MONTH
            case "M":
                out[++index] = date.getMonth() + 1;
                break;
            case "MM":
                out[++index] = ("0" + (date.getMonth() + 1)).slice(-2);
                break;
            case "MMM":
                out[++index] = date.toLocaleString(locale, { month: "short" });
                break;
            case "MMMM":
                out[++index] = date.toLocaleString(locale, { month: "long" });
                break;

            //DAY
            case "d":
                out[++index] = date.getDate();
                break;
            case "dd":
                out[++index] = ("0" + date.getDate()).slice(-2);
                break;
            case "ddd":
                out[++index] = date.toLocaleString(locale, { weekday: "short" });
                break;
            case "dddd":
                out[++index] = date.toLocaleString(locale, { weekday: "long" });
                break;

            //HOURS
            case "h":
                out[++index] = date.getHours() % 12;
                break;
            case "hh":
                out[++index] = ("0" + (date.getHours() % 12)).slice(-2);
                break;
            case "H":
                out[++index] = date.getHours();
                break;
            case "HH":
                out[++index] = ("0" + date.getHours()).slice(-2);
                break;

            //MINUTES
            case "m":
                out[++index] = date.getMinutes();
                break;
            case "mm":
                out[++index] = ("0" + date.getMinutes()).slice(-2);
                break;

            //SECONDS
            case "s":
                out[++index] = date.getSeconds();
                break;
            case "ss":
                out[++index] = ("0" + date.getSeconds()).slice(-2);
                break;

            //FRACTION OF SECONDS
            case "f":
                out[++index] = Math.trunc(date.getMilliseconds() / 100).toString().slice(0, 1);
                break;
            case "ff":
                out[++index] = (Math.trunc(date.getMilliseconds() / 10).toString() + "0").slice(0, 2);
                break;
            case "fff":
                out[++index] = (date.getMilliseconds() + "00").slice(0, 3);
                break;

            //AM OR PM
            case "t":
                out[++index] = date.getHours() >= 12 ? "P" : "A";
                break;
            case "tt":
                out[++index] = date.getHours() >= 12 ? "PM" : "AM";
                break;

            //SEPARATOR
            default:
                out[++index] = formatArr[i];
        }
    }
    return out.join("");
}

/**
 * Set the locale to use. eg "en-US".
 */
format.setLocale = (newLocale) => {
    locale = newLocale;
};

export default format;


/* ------------------- PRIVATE FUNCTIONS ------------------- */

function getLocale() {
    if (navigator.language) {
        return navigator.language;
    }
    if (navigator.browserLanguage) {
        return navigator.browserLanguage;
    }
    if (navigator.systemLanguage) {
        return navigator.systemLanguage;
    }
    if (navigator.userLanguage) {
        return navigator.userLanguage;
    }
    //Default
    return "en-US";
}