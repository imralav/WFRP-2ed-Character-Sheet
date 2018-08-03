class CharacterStatBuilder {
    constructor() {
        Object.assign(this, {
            id: '',
            starting: 0,
            advance: 0,
            current: 0
        });
    }
    withId(id) {
        this.id = id;
        return this;
    }
    withStarting(starting) {
        this.starting = starting;
        return this;
    }
    withAdvance(advance) {
        this.advance = advance;
        return this;
    }
    withCurrent(current) {
        this.current = current;
        return this;
    }
    build() {
        let characterStat = new CharacterStat();
        Object.assign(characterStat, {
            id: this.id,
            starting: this.starting,
            advance: this.advance,
            current: this.current
        });
        return characterStat;
    }
}

export default class CharacterStat {
    constructor() {
        Object.assign(this, {
            id: '',
            starting: 0,
            advance: 0,
            current: 0
        });
    }

    static builder() {
        return new CharacterStatBuilder();
    }
}