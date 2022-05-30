import { PageHeader, ImagesGallery } from "modules";
import getCopy from "utils/getCopy";

const Gallery = () => {
    const GALLERY_COPY = getCopy({ copyKey: "GALLERY_COPY", copyPath: "containers/gallery" });

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={GALLERY_COPY.pageTitle} />
                <ImagesGallery />
            </div>
        </div>
    );
};

export default Gallery;
