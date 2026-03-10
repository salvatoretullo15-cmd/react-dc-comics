export default function AppCard({thumb,series,id}){

    return(
        
              <div className="col" key={id}>
                <div className="card mt-4">
                  <img src={thumb} className="imagine rounded-0" alt="" />
                </div>
                  <h2 className="text mt-3">{series}</h2>
              </div>
          
    )
}
