// @ts-nocheck
import galleryImages from "utils/galleryImages";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleries = () => {
    return galleryImages.map((imgArray, idx) => (
        <ImageGallery items={imgArray} slideInterval={2000} lazyLoad={true} key={idx} />
    ));
};

const ImagesGallery = () => {
    const imageGallery = galleries();
    return <div className="images-gallery">{imageGallery}</div>;
};

export default ImagesGallery;
