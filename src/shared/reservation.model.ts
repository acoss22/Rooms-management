export class Reservation {
    public id: number;
    public requested_by: string;
    public room_id: string;
    public nr_attendees: number;
    public valid_from: string;
    public valid_to: string;
    public marked_as_deleted: boolean;

    constructor(id: number, requested_by: string, room_id: string, nr_attendees: number, valid_from: string, valid_to: string, marked_as_deleted: boolean) {
        this.id = id;
        this.requested_by = requested_by;
        this.room_id = room_id;
        this.nr_attendees = nr_attendees;
        this.valid_from = valid_from;
        this.valid_to = valid_to;
        this.marked_as_deleted = marked_as_deleted;
    }


}