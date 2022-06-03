import { ImagesGallery } from 'modules';
import testSetUp from 'utils/testSetUp';

const galleryImages = [
    [
        {
            original: '/img/gallery/kay1.webp',
            thumbnail: '/img/gallery/thumbs/kay1_tn.jpg',
        },
        {
            original: '/img/gallery/kay2.webp',
            thumbnail: '/img/gallery/thumbs/kay2_tn.jpg',
        },
        {
            original: '/img/gallery/kay3.webp',
            thumbnail: '/img/gallery/thumbs/kay3_tn.jpg',
        },
        {
            original: '/img/gallery/kay4.webp',
            thumbnail: '/img/gallery/thumbs/kay4_tn.jpg',
        },
    ],
    [
        {
            original: '/img/gallery/misc1.webp',
            thumbnail: '/img/gallery/thumbs/misc1_tn.jpg',
        },
        {
            original: '/img/gallery/misc2.webp',
            thumbnail: '/img/gallery/thumbs/misc2_tn.jpg',
        },
        {
            original: '/img/gallery/misc3.webp',
            thumbnail: '/img/gallery/thumbs/misc3_tn.jpg',
        },
    ],
];

describe('ImagesGallery module', () => {
    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <ImagesGallery galleryImages={galleryImages} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the images gallery', () => {
        const imagesGallery = container.getElementsByClassName('images-gallery');
        expect(imagesGallery.length).toBe(1);
    });
});
