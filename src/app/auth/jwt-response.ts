import { Profile } from "../classes/profile";

export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    roles: string[];
    id:number;
  

}