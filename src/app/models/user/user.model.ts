export class UserRegister {

    constructor(
        public email: string,
        public password: string,
        public role: string = 'user',
        // tslint:disable-next-line: variable-name
        public device_name: string = 'default',
    ) { }

}

export class DataUser {

    constructor(
        public name?: string,
        // tslint:disable-next-line: variable-name
        //public phone?: string,
        public lastname?: string,
        public email?: string,
    ) { }

}

export class Password {
    constructor(
        public email: string,
        public password: string,
        // tslint:disable-next-line: variable-name
        public password_new: string,
    ) { }
}
