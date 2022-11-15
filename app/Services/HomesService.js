import { appState } from "../AppState.js"
import { Home } from "../Models/Home.js";
import { Pop } from "../Utils/Pop.js";

class HomesService {
    async editHome(homeData, id) {
        const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/houses/' + id, homeData)
        console.log('[EDIT HOME]', res.data);
        let index = appState.homes.findIndex(h => h.id == id)
        appState.homes.splice(index, 1, new Home(res.data))
        appState.emit('homes')
    }

    SetActive(id) {
        let home = appState.homes.find(h => h.id == id)
        appState.activeHome = home
        console.log(appState.activeHome);
    }

    async getHomes() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses/')
        console.log('[GOT HOMES]', res.data);
        appState.homes = res.data.map(h => new Home(h))
    }

    async createHome(homeData) {
        const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/houses/', homeData)
        console.log('[POST HOME]', res.data);
        appState.homes = [...appState.homes, new Home(res.data)]
    }

    async removeHome(id) {
        const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses/' + id)
        console.log('[DELETE HOME]', res.data);
        Pop.toast(res.data, 'success')
        appState.homes = appState.homes.filter(h => h.id != id)
    }

}


export const homesService = new HomesService()