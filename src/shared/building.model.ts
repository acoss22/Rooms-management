export class Building {
    public name: string;
    public id: number;
    public description: string;
    public imagePath: string;
    public marked_as_deleted: boolean;


    constructor( id: number,  name: string,  description: string, imagePath: string, marked_as_deleted: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.marked_as_deleted = marked_as_deleted;
    }
}