require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stool crawl rifle clutch inner area slot genuine'; 
let testAccounts = [
"0x14dd91edb838e145f1453a6b6cc89e435927e46de16136b546aa02424b2ac964",
"0xeccc9969c64161af92e4d50f72487a6960512b6b379bcfee184c71613cd1adcd",
"0x422737a9c62886e70e9dc67457be5ffe26c77704670c44bd563dd757c7b3066a",
"0x115695f29632cfde1d6ff75e022baf20b59418d351bfd6db396b920cfa3ba23a",
"0x216f0a5255f26762449118564cbc68fc23a409eb075208b10e2138e5a76018c0",
"0xe593673ac0da97bcbbef06c8f889e3caca594a2e0c51b052a74cbc60b6740595",
"0x3fe4d4911e3d2a06e40bf0c65d162ccbb1bf97d0fef352520471a0d80d13cbe8",
"0x45983bb9aede9d557575db04d51c2aa84b5dc064c6f9b441ef7ee9d3b1341b56",
"0xcb9a1d0fab2935475632d39ee6aa7e8bc3bacd8efec6295cd7bbc1d3224039c8",
"0x05b3ff21b1844ddf1953d772b0ce392479429b2640e540863b54d0208c9a4c82"
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

