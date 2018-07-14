import Utils from './utils';

export default class ObjectPaths {
    static setOnPath(object, path, value) {
        if(Utils.isObjectEmpty(object)) {
            throw 'Object cannot be empty';
        }
        if(Utils.isStringEmptyOrBlank(path)) {
            throw 'Property path cannot be empty';
        }
        const properties = path.split('.');
        let inspectedObject = object;
        let lastIndex = properties.length - 1;
        for (let i = 0; i < lastIndex; i++) {
            inspectedObject = inspectedObject[properties[i]];
        }
        inspectedObject[properties[lastIndex]] = value;
    }
}