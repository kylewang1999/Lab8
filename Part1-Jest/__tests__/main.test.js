const main = require('../assets/scripts/main');
const vi_path = main.formatVolumeIconPath;
test('Greater than 66', () => {
    expect(main(67)).toBe('./assets/media/icons/volume-level-3.svg');
});

describe('VolumeIconPath', () => {
    test('Vol > 66', () => {
        expect(main(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('33<Vol<=66,', () => {
        expect(main(66)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('33<Vol<=66,', () => {
        expect(main(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('0<Vol<=33', () => {
        expect(main(33)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('0<Vol<=33', () => {
        expect(main(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('Vol=0', () => {
        expect(main(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
});