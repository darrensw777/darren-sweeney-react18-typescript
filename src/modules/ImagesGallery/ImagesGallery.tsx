import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ImagesGalleryWrapper } from 'modules/moduleStyles'

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
    return <ImagesGalleryWrapper><div className="images-gallery">{imageGallery}</div></ImagesGalleryWrapper>;
};

export default ImagesGallery;
