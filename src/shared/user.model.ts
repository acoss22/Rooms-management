export class User {
    public id: number;
    public full_name: string;
    public email: string;
    public password: string;
    public phone_number: string;
    public department: string;
    public created_at: string;
    public role: string;
    public marked_as_deleted: boolean;


    constructor(id: number, full_name: string, email: string, password: string,
        phone_number: string, department: string, created_at: string, role: string, marked_as_deleted: boolean) {
        
        this.id =id;
        this.full_name = full_name;
        this.email = email;
        this.password=password;
        this.phone_number=phone_number;
        this.department=department;
        this.created_at=created_at;
        this.role=role;
        this.marked_as_deleted=marked_as_deleted;

    }

}