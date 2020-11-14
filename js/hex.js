//convert func
const hexStr2Byte = hexString =>
    new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

const byte2HexStr = bytes =>
    bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');


function byte2Array(byteArray) {
    return byte2HexStr(byteArray);
}

function array2Byte(array) {
    return hexStr2Byte(array);
}

function isJsonString(str) {
    try {
        if (typeof JSON.parse(str) == "object") {
            return true;
        }
    } catch (e) {
    }
    return false;
}


//serialization and deserialization

//private key==========================================================
function serializePriaveKey(privateKey) {
    return JSON.stringify({bytes: byte2HexStr(privateKey.bytes)})
}


function deSerializePriaveKey(privateKey) {
    privateKey = JSON.parse(privateKey);
    return {bytes: hexStr2Byte(privateKey.bytes)};
}


//public key==========================================================
function serializePublicKey(publicKey) {
    var pk = {
        x: byte2HexStr(publicKey.x),
        y: byte2HexStr(publicKey.y)
    };
    return JSON.stringify(pk);
}


function deSerializePublicKey(publicKey) {
    publicKey = JSON.parse(publicKey);
    return {
        x: hexStr2Byte(publicKey.x),
        y: hexStr2Byte(publicKey.y)
    };
}

//encrypted by user's publickey
function serializeEncByPublicKey(encrypted) {
    const serialized = {
        ephemeralPublicKey: {
            x: byte2HexStr(encrypted.ephemeralPublicKey.x),
            y: byte2HexStr(encrypted.ephemeralPublicKey.y)
        },
        encryptedMessage: {
            bytes: byte2HexStr(encrypted.encryptedMessage.bytes)
        },
        authHash: {
            bytes: byte2HexStr(encrypted.authHash.bytes)
        },
        transformBlocks: [],
        publicSigningKey: {
            bytes: byte2HexStr(encrypted.publicSigningKey.bytes)
        },
        signature: {
            bytes: byte2HexStr(encrypted.signature.bytes)
        }
    };
    return JSON.stringify(serialized);
}

function deSerializeEncByPublicKey(encrypted) {
    encrypted = JSON.parse(encrypted);
    return {
        ephemeralPublicKey: {
            x: hexStr2Byte(encrypted.ephemeralPublicKey.x),
            y: hexStr2Byte(encrypted.ephemeralPublicKey.y)
        },
        encryptedMessage: {
            bytes: hexStr2Byte(encrypted.encryptedMessage.bytes)
        },
        authHash: {
            bytes: hexStr2Byte(encrypted.authHash.bytes)
        },
        transformBlocks: [],
        publicSigningKey: {
            bytes: hexStr2Byte(encrypted.publicSigningKey.bytes)
        },
        signature: {
            bytes: hexStr2Byte(encrypted.signature.bytes)
        }
    };
}


//transformedKey==========================================================
function serializeTransformedKey(transformedKey) {
    var serialize = {
        ephemeralPublicKey: {
            x: byte2HexStr(transformedKey.ephemeralPublicKey.x),
            y: byte2HexStr(transformedKey.ephemeralPublicKey.y)
        },
        toPublicKey: {
            x: byte2HexStr(transformedKey.toPublicKey.x),
            y: byte2HexStr(transformedKey.toPublicKey.y),
        },
        encryptedTempKey: {
            bytes: byte2HexStr(transformedKey.encryptedTempKey.bytes)
        },
        hashedTempKey: {
            bytes: byte2HexStr(transformedKey.hashedTempKey.bytes)
        },
        publicSigningKey: {
            bytes: byte2HexStr(transformedKey.publicSigningKey.bytes)
        },
        signature: {
            bytes: byte2HexStr(transformedKey.signature.bytes)
        }
    };
    return JSON.stringify(serialize);
}


function deSerializeTransformedKey(transformedKey) {
    transformedKey = JSON.parse(transformedKey);
    return {
        ephemeralPublicKey: {
            x: hexStr2Byte(transformedKey.ephemeralPublicKey.x),
            y: hexStr2Byte(transformedKey.ephemeralPublicKey.y)
        },
        toPublicKey: {
            x: hexStr2Byte(transformedKey.toPublicKey.x),
            y: hexStr2Byte(transformedKey.toPublicKey.y),
        },
        encryptedTempKey: {
            bytes: hexStr2Byte(transformedKey.encryptedTempKey.bytes)
        },
        hashedTempKey: {
            bytes: hexStr2Byte(transformedKey.hashedTempKey.bytes)
        },
        publicSigningKey: {
            bytes: hexStr2Byte(transformedKey.publicSigningKey.bytes)
        },
        signature: {
            bytes: hexStr2Byte(transformedKey.signature.bytes)
        }
    };
}


//transformed==========================================================
function serializeTransformed(transformed) {
    var serialize = {
        ephemeralPublicKey: {
            x: byte2HexStr(transformed.ephemeralPublicKey.x),
            y: byte2HexStr(transformed.ephemeralPublicKey.y)
        },
        encryptedMessage: {
            bytes: byte2HexStr(transformed.encryptedMessage.bytes)
        },
        authHash: {
            bytes: byte2HexStr(transformed.authHash.bytes)
        },
        transformBlocks: [
            {
                publicKey: {
                    x: byte2HexStr(transformed.transformBlocks[0].publicKey.x),
                    y: byte2HexStr(transformed.transformBlocks[0].publicKey.y)
                },
                encryptedTempKey: {
                    bytes: byte2HexStr(transformed.transformBlocks[0].encryptedTempKey.bytes)
                },
                randomTransformPublicKey: {
                    x: byte2HexStr(transformed.transformBlocks[0].randomTransformPublicKey.x),
                    y: byte2HexStr(transformed.transformBlocks[0].randomTransformPublicKey.y)
                },
                randomTransformEncryptedTempKey: {
                    bytes: byte2HexStr(transformed.transformBlocks[0].randomTransformEncryptedTempKey.bytes)
                }
            }
        ],
        publicSigningKey: {
            bytes: byte2HexStr(transformed.publicSigningKey.bytes)
        },
        signature: {
            bytes: byte2HexStr(transformed.signature.bytes)
        }
    }
    return JSON.stringify(serialize);
}


function deSerializeTransformed(transformed) {
    transformed = JSON.parse(transformed);
    return {
        ephemeralPublicKey: {
            x: hexStr2Byte(transformed.ephemeralPublicKey.x),
            y: hexStr2Byte(transformed.ephemeralPublicKey.y)
        },
        encryptedMessage: {
            bytes: hexStr2Byte(transformed.encryptedMessage.bytes)
        },
        authHash: {
            bytes: hexStr2Byte(transformed.authHash.bytes)
        },
        transformBlocks: [
            {
                publicKey: {
                    x: hexStr2Byte(transformed.transformBlocks[0].publicKey.x),
                    y: hexStr2Byte(transformed.transformBlocks[0].publicKey.y)
                },
                encryptedTempKey: {
                    bytes: hexStr2Byte(transformed.transformBlocks[0].encryptedTempKey.bytes)
                },
                randomTransformPublicKey: {
                    x: hexStr2Byte(transformed.transformBlocks[0].randomTransformPublicKey.x),
                    y: hexStr2Byte(transformed.transformBlocks[0].randomTransformPublicKey.y)
                },
                randomTransformEncryptedTempKey: {
                    bytes: hexStr2Byte(transformed.transformBlocks[0].randomTransformEncryptedTempKey.bytes)
                }
            }
        ],
        publicSigningKey: {
            bytes: hexStr2Byte(transformed.publicSigningKey.bytes)
        },
        signature: {
            bytes: hexStr2Byte(transformed.signature.bytes)
        }
    };
}

//==========================================================