import saveAs from 'file-saver';

import { isFileSaverSupported, isFirefox } from './browser';

const downloadFile = (blob: Blob | undefined, filename: string | undefined) => {
    if (!isFileSaverSupported()) {
        throw new Error('Download requires a newer browser.');
    }
    if (blob) {
        saveAs(blob, filename);
    }
};

export default downloadFile;
