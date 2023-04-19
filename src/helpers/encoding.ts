const ifDefined =
    <T, R>(cb: (input: T) => R) =>
    <U extends T | undefined>(input: U) => {
        return (input !== undefined ? cb(input as T) : undefined) as U extends T ? R : undefined;
    };

export const decodeBase64 = ifDefined((input: string) => atob(input.trim()));

export const encodeBase64 = ifDefined((input: string) => btoa(input).trim());

const isString = (data: any): data is string | String => {
    return typeof data === 'string' || data instanceof String;
};

/**
 * Encode an array of 8-bit integers as a string
 * @param bytes data to encode
 * @return string-encoded bytes
 */
export const arrayToBinaryString = (bytes: Uint8Array) => {
    const result = [];
    const bs = 1 << 14;
    const j = bytes.length;

    for (let i = 0; i < j; i += bs) {
        // @ts-ignore Uint8Array treated as number[]
        result.push(String.fromCharCode.apply(String, bytes.subarray(i, i + bs < j ? i + bs : j)));
    }
    return result.join('');
};

/**
 * Convert a string to an array of 8-bit integers
 * @param str String to convert
 * @returns An array of 8-bit integers
 */
export const binaryStringToArray = (str: string) => {
    if (!isString(str)) {
        throw new Error('binaryStringToArray: Data must be in the form of a string');
    }

    const result = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
        result[i] = str.charCodeAt(i);
    }
    return result;
};

export const uint8ArrayToString = arrayToBinaryString;

export const stringToUint8Array = binaryStringToArray;

export const uint8ArrayToBase64String = (array: Uint8Array) => encodeBase64(uint8ArrayToString(array));

export const base64StringToUint8Array = (string: string) => stringToUint8Array(decodeBase64(string) || '');

/**
 * Encode a binary string in the so-called base64 URL (https://tools.ietf.org/html/rfc4648#section-5)
 * @dev Each character in a binary string can only be one of the characters in a reduced 255 ASCII alphabet. I.e. morally each character is one byte
 * @dev This function will fail if the argument contains characters which are not in this alphabet
 * @dev This encoding works by converting groups of three "bytes" into groups of four base64 characters (2 ** 6 ** 4 is also three bytes)
 * @dev Therefore, if the argument string has a length not divisible by three, the returned string will be padded with one or two '=' characters
 */
export const encodeBase64URL = (str: string, removePadding = true) => {
    const base64String = encodeBase64(str).replace(/\+/g, '-').replace(/\//g, '_');

    return removePadding ? base64String.replace(/=/g, '') : base64String;
};

/**
 * Convert a string encoded in base64 URL into a binary string
 * @param str
 */
export const decodeBase64URL = (str: string) => {
    return decodeBase64((str + '==='.slice((str.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/'));
};

export const uint8ArrayToPaddedBase64URLString = (array: Uint8Array) =>
    encodeBase64URL(uint8ArrayToString(array), false);

export const validateBase64string = (str: string, useVariantAlphabet?: boolean) => {
    const regex = useVariantAlphabet ? /^[-_A-Za-z0-9]*={0,3}$/ : /^[+/A-Za-z0-9]*={0,3}$/;

    return regex.test(str);
};

/**
 * Automatic password reset parameter encoder
 */
export const encodeAutomaticResetParams = (json: any) => {
    const jsonString = JSON.stringify(json);
    return encodeBase64URL(jsonString);
};

/**
 * Automatic password reset parameter decoder
 */
export const decodeAutomaticResetParams = (base64String: string) => {
    const decodedString = decodeBase64URL(base64String);
    return JSON.parse(decodedString);
};
