import './Detail.css'
export default function Detail({text,val}){
    let style={fontWeight:'bold',
fontSize:'1rem'}
    return (
        <div className="detail">
       <p> {text}</p>
       <span >{val}</span>
       </div>
    )
}