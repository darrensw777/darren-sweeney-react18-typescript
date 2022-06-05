import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    /* roboto-slab-regular - latin */
    @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-slab-v23-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/roboto-slab-v23-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-slab-v23-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-slab-v23-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-slab-v23-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-slab-v23-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
    }
    /* roboto-slab-700 - latin */
    @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-slab-v23-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/roboto-slab-v23-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-slab-v23-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-slab-v23-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-slab-v23-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-slab-v23-latin-700.svg#RobotoSlab') format('svg'); /* Legacy iOS */
    }

    /* dosis-regular - latin */
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/dosis-v26-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/dosis-v26-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/dosis-v26-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/dosis-v26-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/dosis-v26-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/dosis-v26-latin-regular.svg#Dosis') format('svg'); /* Legacy iOS */
    }
    /* dosis-700 - latin */
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/dosis-v26-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/dosis-v26-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/dosis-v26-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/dosis-v26-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/dosis-v26-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/dosis-v26-latin-700.svg#Dosis') format('svg'); /* Legacy iOS */
    }
`;

export default FontStyles;
