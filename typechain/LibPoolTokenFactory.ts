/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { LibPoolToken } from "./LibPoolToken";

export class LibPoolTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<LibPoolToken> {
    return super.deploy(overrides) as Promise<LibPoolToken>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): LibPoolToken {
    return super.attach(address) as LibPoolToken;
  }
  connect(signer: Signer): LibPoolTokenFactory {
    return super.connect(signer) as LibPoolTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibPoolToken {
    return new Contract(address, _abi, signerOrProvider) as LibPoolToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];

const _bytecode =
  "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220455b1fd03efc53cc9803c82c3abf50c165f1064abbf6eb81d9f90e08af4bb07564736f6c63430006040033";
