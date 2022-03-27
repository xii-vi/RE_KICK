import { useState } from "react";

export function Carousel() {
    const carouselImage = [
        "https://raw.githubusercontent.com/xii-vi/RE-Kick/dev/assests/homepage-1.webp",
        "https://raw.githubusercontent.com/xii-vi/RE-Kick/dev/assests/homepage-2.webp",
        "https://raw.githubusercontent.com/xii-vi/RE-Kick/dev/assests/homepage-3.webp"
        ];
const [displayImage, setDisplayImage] = useState(0);

function slideshowIndex() {
    setTimeout(() => displayImage < carouselImage.length - 1 ? setDisplayImage(displayImage + 1): setDisplayImage(0), 2500);
}
slideshowIndex();

return (
    <div>
        <img
        alt="carousel-image"
        className="img-responsive"
        src={carouselImage[displayImage]}
        />
    </div>
);
}