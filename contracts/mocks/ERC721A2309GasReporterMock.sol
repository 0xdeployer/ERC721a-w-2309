// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import '../ERC721A2309.sol';

contract ERC721ABGasReporterMock is ERC721A2309 {
    constructor(string memory name_, string memory symbol_) ERC721A2309(name_, symbol_) {}

    function mintOne(address to) public {
        _mint(to, 1);
    }

    function mintFive(address to) public {
        _mint(to, 5);
    }

    function mintTen(address to) public {
        _mint(to, 10);
    }

    function mintTwenty(address to) public {
        _mint(to, 20);
    }

    function mintOneHundred(address to) public {
        _mint(to, 100);
    }
}
