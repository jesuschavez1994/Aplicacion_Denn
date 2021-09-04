export class ContactModels {
    constructor(
        public name: string,
        public email: string,
        public phone?: string,
        public business?: string,
        public description?: string,
    ) { }
}