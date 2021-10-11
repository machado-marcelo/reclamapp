import { User } from "./User";

type Coordinates = {
    latitude: number,
    longitude:  number,
}

export interface Complaint  {
 
    id: string;
    description: string;
    originalPosterImageUris: string[]
    currentUserLikedIt: boolean,
    likeAmount: number;
    responsibleUser: User;
    coordinates: Coordinates
    createdAt: Date | string;
    updatedAt: Date | string; 

}
