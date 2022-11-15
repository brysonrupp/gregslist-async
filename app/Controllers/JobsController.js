import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { setHTML } from "../Utils/Writer.js";

function _drawJobs() {
    const jobs = appState.jobs
    let template = ''
    jobs.forEach(j => template += j.ListTemplate)
    setHTML('listings', template)
}

function _drawJobForm() {
    let job = appState.activeJob
    setHTML('listing-form', Job.GetJobFormTemplate(job))
}



export class jobsController {
    constructor() {

    }
}