import {AiFillDelete} from 'react-icons/ai'
import {BsDashLg} from 'react-icons/bs'

export default function Reviews({rating, comment, username, user, userId, handleDeleteReview, id}){
    return (
        <div className="review-container">
             <div className="rating-container">
                <h5>{`${rating}/5`}</h5>
             </div>
            <div className="comment">
                <h3>{comment}</h3><h5><BsDashLg />{username}</h5>
            </div>
            <div>
                {user.id === userId ? <button onClick={() => handleDeleteReview(id)}><AiFillDelete /></button> : ""}
            </div>
        </div>
    )
}