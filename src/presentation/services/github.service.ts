import { GihubStarPayload } from "../../interfaces/github.types";

export class GitHubService {

    constructor(

    ){

    }

    onStar( payload: GihubStarPayload ) : string {

        let message = ''

        const { starred_at } = payload

        console.log(starred_at);
        
        return ''

    }

}