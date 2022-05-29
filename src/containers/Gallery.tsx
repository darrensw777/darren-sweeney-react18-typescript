import { PageHeader, ImagesGallery } from "modules";
import { useI18n } from "contexts/I18n";

const Gallery = () => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { GALLERY_COPY } = require(`constants/${language}/containers/gallery`);

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
