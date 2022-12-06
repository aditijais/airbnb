export default function card(props){
    return(
                < div className="card">
                    <img src={`../images/${props.img}`} alt=" "className="card--image" />
                    <div className="card--stats">
                        <img src="../images/star.jfif" alt=" "className="card--star" />
                        <span>{props.rating}</span>
                        <span className="gray">({props.reviewCount}) • </span>
                        <span className="gray">{props.location}</span>
                    </div>
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            
    )
}