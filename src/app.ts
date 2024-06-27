import { GitHubController } from './presentation/github/controller'
import { envs } from './config/envs'
import express from 'express'

( () => {

    main()

})()

function main(){

    const app = express()

    app.use(express.json())
    // app.use(express.)

    const githubController = new GitHubController()

    app.post('/api/github', githubController.webHookHandler)

    app.listen(envs.PORT, () => {
        console.log('Server running');
        console.log(`http://localhost:${ envs.PORT }`);
    })

}