import { initializeApp, FirebaseApp } from 'firebase/app'
import {config} from "../../../../firebase"

const app: FirebaseApp = initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
})

export { app }