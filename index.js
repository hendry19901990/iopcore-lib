'use strict';

var iopcore = module.exports;

// module information
iopcore.version = 'v' + require('./package.json').version;

// crypto
iopcore.crypto = {};
iopcore.crypto.BN = require('./lib/crypto/bn');
iopcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
iopcore.crypto.Hash = require('./lib/crypto/hash');
iopcore.crypto.Random = require('./lib/crypto/random');
iopcore.crypto.Point = require('./lib/crypto/point');
iopcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
iopcore.encoding = {};
iopcore.encoding.Base58 = require('./lib/encoding/base58');
iopcore.encoding.Base58Check = require('./lib/encoding/base58check');
iopcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
iopcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
iopcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
iopcore.util = {};
iopcore.util.buffer = require('./lib/util/buffer');
iopcore.util.js = require('./lib/util/js');
iopcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
iopcore.errors = require('./lib/errors');

// main bitcoin library
iopcore.Address = require('./lib/address');
iopcore.Block = require('./lib/block');
iopcore.MerkleBlock = require('./lib/block/merkleblock');
iopcore.BlockHeader = require('./lib/block/blockheader');
iopcore.HDPrivateKey = require('./lib/hdprivatekey.js');
iopcore.HDPublicKey = require('./lib/hdpublickey.js');
iopcore.Networks = require('./lib/networks');
iopcore.Opcode = require('./lib/opcode');
iopcore.PrivateKey = require('./lib/privatekey');
iopcore.PublicKey = require('./lib/publickey');
iopcore.Script = require('./lib/script');
iopcore.Transaction = require('./lib/transaction');
iopcore.URI = require('./lib/uri');
iopcore.Unit = require('./lib/unit');

// dependencies, subject to change
iopcore.deps = {};
iopcore.deps.bnjs = require('bn.js');
iopcore.deps.bs58 = require('bs58');
iopcore.deps.Buffer = Buffer;
iopcore.deps.elliptic = require('elliptic');
iopcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
iopcore.Transaction.sighash = require('./lib/transaction/sighash');
