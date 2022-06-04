require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain hospital guess entire obscure trick'; 
let testAccounts = [
"0x36c0af6f2c0216c755a213caab946e6204df9ab690503aa58aef5c25e373ebdf",
"0x89b855ca5daf977f42c684be7c0669d0a16262341e74478ba4a709fca7ae71be",
"0xa759b1bbedd723c9d177436b878be42566ba0bbaaca1c1dff4ca386586f7de6e",
"0x521c04c979331e932a672663fa130db37814e595fa237bb36160e06541b8f274",
"0x6fe06ec81a0529ddcec09d65b6db910554ed7ade900ac5a12152d0716819de74",
"0x15794e494b3c5d870d4130a5a0d5b047d59a41fa6e3e38def131d41056d70a59",
"0x5542db827eb663f74a748391d5ee5ba29db6bf514264d773708a40c50eb724a0",
"0xe61e60a989ae8fc31a4bb04037df22115fea1a05a1801fad3ae400149fba3c25",
"0x0533b56b9f24be696e9b3396f18717c399e2ad15b5ec13da4919ae5c72bac2fd",
"0x46150ea55beceeb3c408112d420c388a3483f83559123cf80efe791dfc1423b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

