import { initializeApp, FirebaseApp } from 'firebase/app'
import firebaseConfig from "../../../../firebase"

const app: FirebaseApp = initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
})

export { app }