export class Home {
    constructor(data) {
        this.id = data.id || ''
        this.bedrooms = data.bedrooms || 0
        this.bathrooms = data.bathrooms || 0
        this.levels = data.levels || 0
        this.imgUrl = data.imgUrl || ''
        this.year = data.year || 0
        this.price = data.price || 0
        this.description = data.description || ''
    }

    get listTemplate() {
        return `
        <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.imgUrl}" class="card-img-top"
          alt="${this.bedrooms}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.bathrooms} ${this.levels}</span>
            <span>$ ${this.price}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.homesController.setActive('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button  class="btn btn-info"  onclick="app.homesController.setActive('${this.id}')">
            <i class="mdi mdi-pencil"></i>
            </button>
            <button onclick="app.homesController.removeHome('${this.id}')" title="Delete Home!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
        `
    }

    static GetHomeFormTemplate(home) {
        if (!home) {
            home = new Home({})
        }
        return `
        <form onsubmit="app.homesController.${home.id ? `editHome('${home.id}')` : 'createHome()'}">
      <div class="form-floating mb-3">
        <input required type="number" minlength="3" class="form-control" id="home-bedrooms" placeholder="home bedrooms"
        name="bedrooms" value="${home.bedrooms}">
        <label for="home-bedrooms">bedrooms</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="home-bathrooms" placeholder="home bathrooms" name="bathrooms" value="${home.bathrooms}">
        <label for="home-bathrooms">bathrooms</label>
      </div>
      <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="home-levels" placeholder="home levels" name="levels" value="${home.levels}">
      <label for="home-levels">levels</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="url" class="form-control" id="home-img" placeholder="Home Image" name="imgUrl" value="${home.imgUrl}">
        <label for="home-img">Image</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="home-year" placeholder="Home Year" name="year" value="${home.year}">
        <label for="home-year">Year</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="home-price" placeholder="Home price" name="price" value="${home.price}">
        <label for="home-price">Price</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a description here" id="home-description"
          name="description">${home.description}</textarea>
        <label for="home-description">Description</label>
      </div>
      <button type="submit" class="btn btn-success mt-3">Submit</button>
      <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
    </form>
        `
    }
}