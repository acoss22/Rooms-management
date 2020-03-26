

export class Room {
    constructor(public id: number, public name: string, public amount: number, public imagePath?: string) {
      this.id = id;
      this.name = name;
      this.amount=amount;
      this.imagePath=imagePath;
    }
  }
  