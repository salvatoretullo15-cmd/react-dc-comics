import AppIcone from "./AppIcone";
export default function AppFooter(){

return (
    <footer> 
      <div className="d-flex row">
          <div className="container row row-cols-md-2 row-cols-lg-3 text-white d-flex">
            <ul className="col list mt-3">
                <li>
                  <h2 className="fs-3">DC COMICS</h2>
                  <p className ="text-secondary">Character</p>
                  <p className ="text-secondary">Comics</p>
                  <p className ="text-secondary">Movies</p>
                  <p className ="text-secondary">TV</p>
                  <p className ="text-secondary">Games</p>
                  <p className ="text-secondary">VIDEOS</p>
                  <p className ="text-secondary">News</p>
                </li>
                <li>
                  <h2 className="fs-3 mt-5">SHOP</h2>
                  <p className ="text-secondary">Shop Dc</p>
                  <p className ="text-secondary">Shop DC Collectibles</p>
                </li>
            </ul>
            <ul className="col list mt-3">
                <li>
                  <h2 className="fs-3">DC</h2>
                  <p className ="text-secondary">Terms of us</p>
                  <p className ="text-secondary">Privacy Policy</p>
                  <p className ="text-secondary">Ad choises</p>
                  <p className ="text-secondary">Advertising</p>
                  <p className ="text-secondary">Jobs</p>
                  <p className ="text-secondary">Subscription</p>
                  <p className ="text-secondary">Talent Workshop</p>
                  <p className ="text-secondary">CPSC Certificates</p>
                  <p className ="text-secondary">Ratings</p>
                  <p className ="text-secondary">Shop help</p>
                  <p className ="text-secondary">Contact us</p>
                </li>
            </ul>
            <ul className="col list mt-3">
                <li>
                  <h2 className="fs-3">SITES</h2>
                  <p className ="text-secondary">DC</p>
                  <p className ="text-secondary">MAD Magazine</p>
                  <p className ="text-secondary">DC Movies</p>
                  <p className ="text-secondary">DC Universe</p>
                  <p className ="text-secondary">DC Power Visa</p>
                </li>
            </ul>
          </div>
          <div className="greyBar d-flex bg-dark">
            <div className="container d-flex align-items-center justify-content-between">
              
                  <button className="btn btn-primary rounded-0 text-white">
                    SIGN-UP NOW
                  </button>
                
                  <AppIcone />
                
            </div>
          </div>
      </div>
    </footer>
  )
}