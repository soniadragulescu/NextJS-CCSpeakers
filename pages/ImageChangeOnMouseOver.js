import React, {useState} from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOnMouseOver = () =>{
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <ImageToggleOnMouseOver primaryImg="rash1.jpg" secondaryImg="/bw/rash1_bw.jpg"/>
            <ImageToggleOnMouseOver primaryImg="rash2.JPG" secondaryImg="/bw/rash2_bw.jpg"/>
        </div>
    );
};

export default ImageChangeOnMouseOver;