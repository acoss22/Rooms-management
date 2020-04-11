export class Material{
public id: number;
public name:string;
public description:string;
public material_type: string;
public room_id: string;

constructor(id: number, name: string, description: string, material_type: string, room_id: string)
{
    this.id=id;
    this.name=name;
    this.description=description;
    this.material_type=material_type;
    this.room_id=room_id;
}


}