//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./ERC20_v1.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";

contract ERC20_v2 is ERC20_v1, ERC20PermitUpgradeable {
      function ERC20Version() external pure returns (uint256) {
       return 2;
   }

      function mintHundredTokens() external{
          _mint(msg.sender, 100 * 10 ** decimals());
      }
  }