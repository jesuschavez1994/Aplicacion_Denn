export class UserLogin {

    constructor(
        public email: string,
        public password: string,
        // tslint:disable-next-line: variable-name
        public device_name: string = 'default',
    ) { }
}
