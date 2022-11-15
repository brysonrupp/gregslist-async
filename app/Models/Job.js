export class Job {
    constructor(data) {
        this.id = data.id || ''
        this.company = data.company || ''
        this.jobTitle = data.jobTitle || ''
        this.hours = data.hours || 0
        this.rate = data.rate || 0
        this.description = data.description || ''
    }

    get ListTemplate() {
        return `
        
        `
    }

    static GetJobFormTemplate(job) {
        if (!job) {
            job = new Job({})
        }
        return `
        
        `
    }


}