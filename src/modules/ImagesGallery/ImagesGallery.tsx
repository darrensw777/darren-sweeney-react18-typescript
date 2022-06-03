import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageObject {
    original: string;
    thumbnail: string;
}
interface ImagesGalleryProps {
    galleryImages: ImageObject[][];
}

const galleries = ({ galleryImages }: ImagesGalleryProps) => {
    return galleryImages.map((imgArray, idx) => (
        <ImageGallery items={imgArray} slideInterval={2000} lazyLoad={true} key={idx} />
    ));
};

const ImagesGallery = ({ galleryImages }: ImagesGalleryProps) => {
    const imageGallery = galleries({ galleryImages });
    return <div className="images-gallery">{imageGallery}</div>;
};

export default ImagesGallery;
