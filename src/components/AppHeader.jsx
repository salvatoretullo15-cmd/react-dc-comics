export default function AppHeader(){


  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src="dc-logo.png" className="DC-brand" alt="DC logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-end w-100">
                <li className="nav-item">
                  <a className="nav-link" href="#">CHARACTERS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">COMICS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">MOVIES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">TV</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">GAMES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">COLLECTIBLES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">VIDEOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FANS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">NEWS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SHOP</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}