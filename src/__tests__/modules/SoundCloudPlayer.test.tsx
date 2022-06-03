import { SoundCloudPlayer } from 'modules';
import testSetUp from 'utils/testSetUp';

describe('SoundCloudPlayer module', () => {
    const soundcloudIds = [1252449361, 246065520];

    let asFragment: any, container: any;
    beforeEach(() => {
        ({ asFragment, container } = testSetUp({
            Component: <SoundCloudPlayer soundcloudIds={soundcloudIds} />,
        }));
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the player container', () => {
        const player = container.getElementsByClassName('soundcloud-player');
        expect(player.length).toBe(1);
    });

    test('renders the players', () => {
        const player = container.getElementsByClassName('player');
        expect(player.length).toBe(2);
    });
});
