export default function AppFooter(){

const contacts = [
{
  id:1,
  img:"/public/footer-facebook.png",
},
{
  id:2,
  img:"/public/footer-twitter.png",
},
{
  id:3,
  img:"/public/footer-youtube.png",
},
{
  id:4,
  img:"/public/footer-pinterest.png",
},
{
  id:5,
  img:"/public/footer-periscope.png",
}
];

  return (
    <footer> 
      <div className="greyBar bg-dark pt-4">
        <div className="container d-flex align-items-center justify-content-between">
            <button className="btn btn-primary rounded-0 text-white">
              SIGN-UP NOW
            </button>
          <div className="d-flex align-items-center gap-3"> 
            <span className="text-primary fw-bold mb-0">FOLLOW US</span>
            {contacts.map((contact) => (
            <img key={contact.id} src={contact.img} alt="social" />
            ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}