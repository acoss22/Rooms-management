export class Room {
  public id : number;
  public name: string;
  public image_id: string;
  public capacity: number;
  public marked_as_deleted: boolean;
  public building_id : string;
  public state: boolean;
  public floor: boolean;
  public description: string;


  constructor(id: number, name: string, image_id, capacity, marked_as_deleted, building_id, state, floor, description ) {
      this.id = id;
      this.name = name;
      this.image_id = image_id;
      this.capacity = capacity;
      this.marked_as_deleted = marked_as_deleted;
      this.building_id = building_id;
      this.state = state;
      this.floor = floor;
      this.description = description;
    }
  }
  