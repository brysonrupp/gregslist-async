import { appState } from "../AppState.js";
import { Home } from "../Models/Home.js";
import { homesService } from "../Services/HomesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";





function _drawHomes() {
    const homes = appState.homes
    let template = ''
    homes.forEach(h => template += h.listTemplate)
    setHTML('listings', template)
}

function _drawHomesForm() {
    let home = appState.activeHome
    setHTML('listing-form', Home.GetHomeFormTemplate(home))
}


export class HomesController {
    constructor() {
        appState.on('homes', _drawHomes)
        appState.on('activeHome', _drawHomesForm)
        this.getHomes()
        _drawHomesForm()
    }

    showHomes() {
        this.getHomes()
        _drawHomesForm()
    }

    async getHomes() {
        try {
            await homesService.getHomes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async createHome() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let homeData = getFormData(form)
            Pop.toast('created', 'success')
            form.reset()
            console.log(homeData);
            await homesService.createHome(homeData)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    setActive(id) {
        homesService.SetActive(id)
    }

    async editHome(id) {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const homeData = getFormData(form)
            console.log('editing', form);
            await homesService.editHome(homeData, id)
            Pop.toast('edited', 'info')
            form.reset()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async removeHome(id) {
        try {
            console.log('deleting', id);
            if (await Pop.confirm('are you sure?')) {
                await homesService.removeHome(id)
            }
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

}