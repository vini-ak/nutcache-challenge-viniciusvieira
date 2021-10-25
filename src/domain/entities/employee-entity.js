export class EmployeeEntity {
    constructor(name, birth_date, gender, email, cpf, start_date, { team, _id }) {
        this.name = name;
        this.birth_date = birth_date;
        this.gender = gender;
        this.email = email;
        this.cpf = cpf;
        this.start_date = start_date;
        this.team = team;
        this._id = _id;
    }

    static from(json) {
        return Object.assign(new EmployeeEntity(), json);
    }
}