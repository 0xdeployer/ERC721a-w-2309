const { deployContract } = require('./helpers.js');

describe('ERC721A Gas Usage', function () {
  beforeEach(async function () {
    this.erc721 = await deployContract('ERC721GasReporterMock');
    this.erc721a = await deployContract('ERC721AGasReporterMock', ['Azuki', 'AZUKI']);
    this.erc721ab = await deployContract('ERC721ABGasReporterMock', ['NoRugs', 'NORUGS']);
    const [owner, addr1] = await ethers.getSigners();
    this.owner = owner;
    this.addr1 = addr1;
  });

  context('mintOne', function () {
    it('ERC721 - runs mintOne 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721.mintOne(this.addr1.address);
      }
    });
    it('ERC721A - runs mintOne 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721a.mintOne(this.addr1.address);
      }
    });
    it('ERC721AB - runs mintOne 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721ab.mintOne(this.addr1.address);
      }
    });
  });

  context('mintFive', function () {
    it('ERC721 - runs mintFive 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721.mintFive(this.addr1.address);
      }
    });
    it('ERC721A - runs mintFive 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721a.mintFive(this.addr1.address);
      }
    });
    it('ERC721AB - runs mintFive 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721ab.mintFive(this.addr1.address);
      }
    });
  });

  context('mintTen', function () {
    it('ERC721 - runs mintTen 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721.mintTen(this.addr1.address);
      }
    });
    it('ERC721A - runs mintTen 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721a.mintTen(this.addr1.address);
      }
    });
    it('ERC721AB - runs mintTen 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721ab.mintTen(this.addr1.address);
      }
    });
  });

  context('mintTwenty', function () {
    it('ERC721 - runs mintTwenty 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721.mintTwenty(this.addr1.address);
      }
    });
    it('ERC721A - runs mintTwenty 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721a.mintTwenty(this.addr1.address);
      }
    });
    it('ERC721AB - runs mintTwenty 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721ab.mintTwenty(this.addr1.address);
      }
    });
  });

  context('mintOneHundred', function () {
    it('ERC721 - runs mintOneHundred 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721.mintOneHundred(this.addr1.address);
      }
    });
    it('ERC721A - runs mintOneHundred 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721a.mintOneHundred(this.addr1.address);
      }
    });
    it('ERC721AB - runs mintOneHundred 2 times', async function () {
      for (let i = 0; i < 2; i++) {
        await this.erc721ab.mintOneHundred(this.addr1.address);
      }
    });
  });
});
