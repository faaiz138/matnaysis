import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"
function Navbar (){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:3000/">
      <img src="https://serving.photos.photobox.com/87992488772f7c267988fd0415bd7aa7b7e09d9fc894687db3a5cd2626cd4cb58f293634.jpg" alt="Avatar" width="50" height="30" class="d-inline-block align-text-top"></img>
        Matnaysis
      </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/">Home</a>
            </li>
          </ul>
          <span class="navbar-text" >
          The tool for your Investments
          </span>
        </div>
      </div>
    </nav>
    )
}
export default Navbar