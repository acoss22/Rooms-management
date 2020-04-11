export class Anomaly {
    public id: number;
    public title: string;
    public description: string;
    public created_by: string;
    public created_at: string;
    public state: boolean;
    public marked_as_deleted: boolean;

    constructor(id: number, title: string, description: string, created_by: string, created_at: string, state: boolean, marked_as_deleted: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.created_at = created_at;
        this.created_by = created_by;
        this.marked_as_deleted = marked_as_deleted;

    }

}