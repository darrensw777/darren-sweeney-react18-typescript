import { PageHeader, ImagesGallery } from 'modules';
import galleryImages from 'utils/galleryImages';
import getCopy from 'utils/getCopy';
import { ContainerWrapper } from "./containerStyles";

const Gallery = (): JSX.Element => {
    const GALLERY_COPY = getCopy({ copyKey: 'GALLERY_COPY', copyPath: 'containers/gallery' });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={GALLERY_COPY.pageTitle} />
                    <ImagesGallery galleryImages={galleryImages} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Gallery;
