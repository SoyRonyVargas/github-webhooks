import { Request, Response } from "express";
import { GitHubService } from "../services/github.service";

export class GitHubController {

    constructor(
        private readonly githubService: GitHubService
    ){

    }


    public webHookHandler( req: Request , res: Response ){

        const githubEvent = req.header('x-github-event') ?? 'unknow'
        const payload = req.body
        
        console.log('Event');
        console.log(githubEvent);
        
        console.log('Body');
        console.log(req.body);


        switch(githubEvent){
            case 'star':
                this.githubService.onStar(payload)
            break
            default:
                console.log('Event unknow');
                console.log(githubEvent);
            break;
        }

        return res.json({
            data: req.body,
        })

    }

}