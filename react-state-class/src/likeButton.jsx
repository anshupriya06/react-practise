import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    };
    let LikeStyle = { color : "pink"}
    return (
        <div>
            <h1 onClick={toggleLike}>
                {isLiked ?( 
                    <i class="fa-solid fa-heart" style={LikeStyle}></i>
                ) : (
                    <i class="fa-regular fa-heart"></i>
                )}
            </h1>
        </div>
    )
}