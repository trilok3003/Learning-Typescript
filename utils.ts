export class Utils {

    /**
     * 
     * @param val Check for null Object
     */
    public static isObject(val) {
        if (val === null) { 
            return false; 
        }
        return ((typeof val === 'function') || (typeof val === 'object'));
    }

    /**
     * Parse JSON string
     */
    public static parseJSON(data) {
        data = data || "";
        return JSON.parse(data);
    }
}