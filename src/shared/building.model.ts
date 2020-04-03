export class Building {
    public name: string;
    public id: number;
    public description: string;
    public imagePath: string;


    constructor( id: number,  name: string,  description: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}