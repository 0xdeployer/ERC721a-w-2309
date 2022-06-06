pragma solidity ^0.8.4;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract ERC721GasReporterMock is ERC721 {
    uint256 id;

    constructor() ERC721('ERC721', '721') {}

    function _mintMany(address to, uint256 amount) internal {
        unchecked {
            for (uint256 i = 0; i < amount; i++) {
                _mint(to, id++);
            }
        }
    }

    function mintOne(address to) public {
        _mintMany(to, 1);
    }

    function mintFive(address to) public {
        _mintMany(to, 5);
    }

    function mintTen(address to) public {
        _mintMany(to, 10);
    }

    function mintTwenty(address to) public {
        _mintMany(to, 20);
    }

    function mintOneHundred(address to) public {
        _mintMany(to, 100);
    }
}
