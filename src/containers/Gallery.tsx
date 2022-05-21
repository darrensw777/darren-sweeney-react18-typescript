import {useContext} from "react";
import { PageHeader, ImagesGallery } from 'modules';
import { I18nContext } from "utils/context";

const Gallery = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived?.default;
    const {
        GALLERY_COPY,
    } = require(`constants/${language}/containers/gallery.js`);

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
