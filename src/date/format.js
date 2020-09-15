let locale = getLocale();

/**
 * Set the locale to use. eg "en-US".
 */
if (!Date.setLocale) {
    Object.defineProperty(Date, "setLocale", {
        value: function (newLocale) {
            locale = newLocale;
        }
    });
}

/**
 * Get formatted string of the current time.
 * @public
 * @param {String} formatStr - Format string eg. yyyy-MM-dd HH:mm:ss
 * @returns {String}
 */
if (!Date.format) {
    Object.defineProperty(Date, "format", {
        value: function (formatStr) {
            return new Date().format(formatStr);
        }
    });
}

/**
 * Get formatted string from this date object.
 * @public
 * @param {String} formatStr - Format string eg. yyyy-MM-dd HH:mm:ss
 * @returns {String}
 */
if (!Date.prototype.format) {
    Object.defineProperty(Date.prototype, "format", {
        value: function (formatStr) {
            //Split on specifiers. Keep delimiters.
            const formatArr = formatStr.split(/(yyyy|yyy|yy|y|MMMM|MMM|MM|M|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|fff|ff|f|tt|t)/gm);
            const out = [];
            let index = -1;
            for (let i = 0; i < formatArr.length; ++i) {
                switch (formatArr[i]) {
                    //YEAR
                    case "y":
                        out[++index] = (this.getFullYear() % 100).toString();
                        break;
                    case "yy":
                        out[++index] = ("0" + (this.getFullYear() % 100).toString()).slice(-2);
                        break;
                    case "yyy": {
                        let year = this.getFullYear().toString();
                        out[++index] = year.length > 2 ? year : ("00" + year).slice(-3);
                        break;
                    }
                    case "yyyy":
                        out[++index] = ("000" + this.getFullYear()).slice(-4);
                        break;

                    //MONTH
                    case "M":
                        out[++index] = this.getMonth() + 1;
                        break;
                    case "MM":
                        out[++index] = ("0" + (this.getMonth() + 1)).slice(-2);
                        break;
                    case "MMM":
                        out[++index] = this.toLocaleString(locale, { month: "short" });
                        break;
                    case "MMMM":
                        out[++index] = this.toLocaleString(locale, { month: "long" });
                        break;

                    //DAY
                    case "d":
                        out[++index] = this.getDate();
                        break;
                    case "dd":
                        out[++index] = ("0" + this.getDate()).slice(-2);
                        break;
                    case "ddd":
                        out[++index] = this.toLocaleString(locale, { weekday: "short" });
                        break;
                    case "dddd":
                        out[++index] = this.toLocaleString(locale, { weekday: "long" });
                        break;

                    //HOURS
                    case "h":
                        out[++index] = this.getHours() % 12;
                        break;
                    case "hh":
                        out[++index] = ("0" + (this.getHours() % 12)).slice(-2);
                        break;
                    case "H":
                        out[++index] = this.getHours();
                        break;
                    case "HH":
                        out[++index] = ("0" + this.getHours()).slice(-2);
                        break;

                    //MINUTES
                    case "m":
                        out[++index] = this.getMinutes();
                        break;
                    case "mm":
                        out[++index] = ("0" + this.getMinutes()).slice(-2);
                        break;

                    //SECONDS
                    case "s":
                        out[++index] = this.getSeconds();
                        break;
                    case "ss":
                        out[++index] = ("0" + this.getSeconds()).slice(-2);
                        break;

                    //FRACTION OF SECONDS
                    case "f":
                        out[++index] = Math.trunc(this.getMilliseconds() / 100).toString().slice(0, 1);
                        break;
                    case "ff":
                        out[++index] = (Math.trunc(this.getMilliseconds() / 10).toString() + "0").slice(0, 2);
                        break;
                    case "fff":
                        out[++index] = (this.getMilliseconds() + "00").slice(0, 3);
                        break;

                    //AM OR PM
                    case "t":
                        out[++index] = this.getHours() >= 12 ? "P" : "A";
                        break;
                    case "tt":
                        out[++index] = this.getHours() >= 12 ? "PM" : "AM";
                        break;

                    //SEPARATOR
                    default:
                        out[++index] = formatArr[i];
                }
            }
            return out.join("");
        }
    });
}

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