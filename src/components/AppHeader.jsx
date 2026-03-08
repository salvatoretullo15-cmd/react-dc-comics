export default function AppHeader(){


  return (
    <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <img src="dc-logo.png" alt="DC logo" />
              <div className="container d-flex justify-content-end gap-3">
                <a className="nav-link" href="#">CHARACTERS</a>               
                <a className="active" href="#">COMICS</a>               
                <a className="nav-link" href="#">MOVIES</a>              
                <a className="nav-link" href="#">TV</a>              
                <a className="nav-link" href="#">GAMES</a>              
                <a className="nav-link" href="#">COLLECTIBLES</a>              
                <a className="nav-link" href="#">VIDEOS</a>              
                <a className="nav-link" href="#">FANS</a>             
                <a className="nav-link" href="#">NEWS</a>            
                <a className="nav-link" href="#">SHOP</a>            
              </div>                  
          </nav>
        </div>
    </header>
  )
}