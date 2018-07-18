import ObjectPaths from './ObjectPaths';

describe('ObjectPaths', () => {
    describe('setOnPath', () => {
        let someCorrectObject;
        beforeEach(() => {
            someCorrectObject = {
                a: {
                    name: 'a',
                    b: {
                        name: 'b',
                        c: {
                            name: 'c',
                            d: {
                                name: 'd'
                            }
                        }
                    }
                }
            };
        });
        afterEach(() => {
            someCorrectObject = null;
        });
        it('should set value on correct direct path', () => {
            expect(someCorrectObject.name).not.toBeDefined();
            ObjectPaths.setOnPath(someCorrectObject, 'name', 'c');
            expect(someCorrectObject.name).toEqual('c');
        });
        it('should set value on correct nested path', () => {
            expect(someCorrectObject.a.b.name).toEqual('b');
            ObjectPaths.setOnPath(someCorrectObject, 'a.b.name', 'c');
            expect(someCorrectObject.a.b.name).toEqual('c');
        });
        [null, undefined, {}].forEach(object => {
            it('should throw error on empty object', () => {
                try {
                    ObjectPaths.setOnPath(object, 'some.path', 'someValue');
                } catch (error) {
                    expect(error).toEqual('Object cannot be empty');
                }
            });
        });
        [null, undefined, ''].forEach(path => {
            it('should throw error on empty path', () => {
                try {
                    ObjectPaths.setOnPath(someCorrectObject, path, 'someValue');
                } catch (error) {
                    expect(error).toEqual('Property path cannot be empty');
                }
            });
        });
    });
});