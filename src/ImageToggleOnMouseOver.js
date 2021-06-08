import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);

    return (
        <div style={{width: "100%", height: "100%"}}>
            <img src={primaryImg}
            style={{width: "50%", height:"50%"}}
            onMouseOver={()=>{
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={()=>{
                imageRef.current.src = primaryImg;
            }}
            ref={imageRef}/>
        </div>
    );
};

export default ImageToggleOnMouseOver;