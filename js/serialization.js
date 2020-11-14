const hexStr2Byte = hexString =>
	new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

const byte2HexStr = bytes =>
	bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

function byte2Array(byteArray) {
	return Array.from(byteArray);
}

function array2Byte(array) {
	return new Uint8Array(array);
}

//private key==========================================================
function serializePriaveKey(privateKey) {
	return JSON.stringify({bytes: Array.from(privateKey.bytes)})
}


function deSerializePriaveKey(privateKey) {
	privateKey = JSON.parse(privateKey);
	return {bytes: new Uint8Array(privateKey.bytes)};
}



//public key==========================================================
function serializePublicKey(publicKey) {
	var pk = {
		x: Array.from(aliceKey.publicKey.x), 
		y: Array.from(aliceKey.publicKey.y)
	};
	return JSON.stringify(pk);
}


function deSerializePublicKey(publicKey) {
	publicKey = JSON.parse(publicKey);
	return {
		x: new Uint8Array(publicKey.x), 
		y: new Uint8Array(publicKey.y)
	};
}



//transformedKey==========================================================
function serializeTransformedKey(transformedKey) {
	var serialize = {
		ephemeralPublicKey: {
			x: Array.from(transformedKey.ephemeralPublicKey.x),
			y: Array.from(transformedKey.ephemeralPublicKey.y)
		},
		toPublicKey: {
			x: Array.from(transformedKey.toPublicKey.x),
			y: Array.from(transformedKey.toPublicKey.y),
		},
		encryptedTempKey: {
			bytes: Array.from(transformedKey.encryptedTempKey.bytes)
		},
		hashedTempKey: {
			bytes: Array.from(transformedKey.hashedTempKey.bytes)
		},
		publicSigningKey: {
			bytes: Array.from(transformedKey.publicSigningKey.bytes)
		},
		signature: {
			bytes: Array.from(transformedKey.signature.bytes)
		}
	};
	return JSON.stringify(serialize);
}


function deSerializeTransformedKey(transformedKey) {
	transformedKey = JSON.parse(transformedKey);
	return {
		ephemeralPublicKey: {
			x: new Uint8Array(transformedKey.ephemeralPublicKey.x),
			y: new Uint8Array(transformedKey.ephemeralPublicKey.y)
		},
		toPublicKey: {
			x: new Uint8Array(transformedKey.toPublicKey.x),
			y: new Uint8Array(transformedKey.toPublicKey.y),
		},
		encryptedTempKey: {
			bytes: new Uint8Array(transformedKey.encryptedTempKey.bytes)
		},
		hashedTempKey: {
			bytes: new Uint8Array(transformedKey.hashedTempKey.bytes)
		},
		publicSigningKey: {
			bytes: new Uint8Array(transformedKey.publicSigningKey.bytes)
		},
		signature: {
			bytes: new Uint8Array(transformedKey.signature.bytes)
		}
	};
}






//transformed==========================================================
function serializeTransformed(transformed) {
	var serialize = {
	    ephemeralPublicKey:{
	        x:Array.from(transformed.ephemeralPublicKey.x),
	        y:Array.from(transformed.ephemeralPublicKey.y)
	    },
	    encryptedMessage:{
	        bytes:Array.from(transformed.encryptedMessage.bytes)
	    },
	    authHash:{
	        bytes:Array.from(transformed.authHash.bytes)
	    },
	    transformBlocks:[
	        {
	            publicKey:{
	                x:Array.from(transformed.transformBlocks[0].publicKey.x),
	                y:Array.from(transformed.transformBlocks[0].publicKey.y)
	            },
	            encryptedTempKey:{
	                bytes:Array.from(transformed.transformBlocks[0].encryptedTempKey.bytes)
	            },
	            randomTransformPublicKey:{
	                x:Array.from(transformed.transformBlocks[0].randomTransformPublicKey.x),
	                y:Array.from(transformed.transformBlocks[0].randomTransformPublicKey.y)
	            },
	            randomTransformEncryptedTempKey:{
	                bytes:Array.from(transformed.transformBlocks[0].randomTransformEncryptedTempKey.bytes)
	            }
	        }
	    ],
	    publicSigningKey:{
	        bytes:Array.from(transformed.publicSigningKey.bytes)
	    },
	    signature:{
	        bytes:Array.from(transformed.signature.bytes)
	    }
	}
	return JSON.stringify(serialize);
}


function deSerializeTransformed(transformed) {
	transformed = JSON.parse(transformed);
	return {
	    ephemeralPublicKey:{
	        x:new Uint8Array(transformed.ephemeralPublicKey.x),
	        y:new Uint8Array(transformed.ephemeralPublicKey.y)
	    },
	    encryptedMessage:{
	        bytes:new Uint8Array(transformed.encryptedMessage.bytes)
	    },
	    authHash:{
	        bytes:new Uint8Array(transformed.authHash.bytes)
	    },
	    transformBlocks:[
	        {
	            publicKey:{
	                x:new Uint8Array(transformed.transformBlocks[0].publicKey.x),
	                y:new Uint8Array(transformed.transformBlocks[0].publicKey.y)
	            },
	            encryptedTempKey:{
	                bytes:new Uint8Array(transformed.transformBlocks[0].encryptedTempKey.bytes)
	            },
	            randomTransformPublicKey:{
	                x:new Uint8Array(transformed.transformBlocks[0].randomTransformPublicKey.x),
	                y:new Uint8Array(transformed.transformBlocks[0].randomTransformPublicKey.y)
	            },
	            randomTransformEncryptedTempKey:{
	                bytes:new Uint8Array(transformed.transformBlocks[0].randomTransformEncryptedTempKey.bytes)
	            }
	        }
	    ],
	    publicSigningKey:{
	        bytes:new Uint8Array(transformed.publicSigningKey.bytes)
	    },
	    signature:{
	        bytes:new Uint8Array(transformed.signature.bytes)
	    }
	};
}

//==========================================================

