export default class Utils {
    static isObjectEmpty(object) {
        for(let property in object) {
            return false;
        }
        return true;
    }

    static isStringEmptyOrBlank(string) {
        return !Boolean(string) || (!string || /^\s*$/.test(string));
    }
}