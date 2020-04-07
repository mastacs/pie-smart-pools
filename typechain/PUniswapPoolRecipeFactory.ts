/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PUniswapPoolRecipe } from "./PUniswapPoolRecipe";

export class PUniswapPoolRecipeFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PUniswapPoolRecipe> {
    return super.deploy() as Promise<PUniswapPoolRecipe>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PUniswapPoolRecipe {
    return super.attach(address) as PUniswapPoolRecipe;
  }
  connect(signer: Signer): PUniswapPoolRecipeFactory {
    return super.connect(signer) as PUniswapPoolRecipeFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PUniswapPoolRecipe {
    return new Contract(address, _abi, signerOrProvider) as PUniswapPoolRecipe;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "ethToTokenSwapOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "ethToTokenTransferOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      }
    ],
    name: "getEthToTokenOutputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      }
    ],
    name: "getTokenToEthInputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address"
      },
      {
        internalType: "address",
        name: "_uniswapFactory",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_min_eth",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "tokenToEthSwapInput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_min_eth",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "tokenToEthTransferInput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uprSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061147e806100206000396000f3fe60806040526004361061008a5760003560e01c80637237e031116100595780637237e031146101585780637da8ca171461019d57806395b68fe7146101b257806395e3c50b146101dc578063f09a40161461021257610091565b80630b5736381461009657806316f0115b146100da57806359e948621461010b5780636b1d4db71461013557610091565b3661009157005b600080fd5b6100c8600480360360608110156100ac57600080fd5b50803590602081013590604001356001600160a01b031661024f565b60408051918252519081900360200190f35b3480156100e657600080fd5b506100ef61068a565b604080516001600160a01b039092168252519081900360200190f35b34801561011757600080fd5b506100c86004803603602081101561012e57600080fd5b50356106a3565b6100c86004803603604081101561014b57600080fd5b50803590602001356109a3565b34801561016457600080fd5b506100c86004803603608081101561017b57600080fd5b50803590602081013590604081013590606001356001600160a01b03166109b7565b3480156101a957600080fd5b506100c8610d17565b3480156101be57600080fd5b506100c8600480360360208110156101d557600080fd5b5035610d32565b3480156101e857600080fd5b506100c8600480360360608110156101ff57600080fd5b5080359060208101359060400135611029565b34801561021e57600080fd5b5061024d6004803603604081101561023557600080fd5b506001600160a01b038135811691602001351661103f565b005b60008061025a6110cd565b90504284101561026957600080fd5b805460408051630dc6eaf760e21b815260048101889052905160609283926001600160a01b039091169163371babdc91602480820192600092909190829003018186803b1580156102b957600080fd5b505afa1580156102cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160409081528110156102f657600080fd5b8101908080516040519392919084600160201b82111561031557600080fd5b90830190602082018581111561032a57600080fd5b82518660208202830111600160201b8211171561034657600080fd5b82525081516020918201928201910280838360005b8381101561037357818101518382015260200161035b565b5050505090500160405260200180516040519392919084600160201b82111561039b57600080fd5b9083019060208201858111156103b057600080fd5b82518660208202830111600160201b821117156103cc57600080fd5b82525081516020918201928201910280838360005b838110156103f95781810151838201526020016103e1565b50505050905001604052505050915091506000935060008090505b82518110156104ef5761044d83828151811061042c57fe5b602002602001015183838151811061044057fe5b60200260200101516110ef565b8501945082818151811061045d57fe5b60209081029190910181015185546040805163095ea7b360e01b81526001600160a01b03928316600482015260001960248201529051919092169263095ea7b392604480820193918290030181600087803b1580156104bb57600080fd5b505af11580156104cf573d6000803e3d6000fd5b505050506040513d60208110156104e557600080fd5b5050600101610414565b50604051473403945033904780156108fc02916000818181858888f19350505050158015610521573d6000803e3d6000fd5b508254604080516334e7a19f60e01b8152600481018a905290516001600160a01b03909216916334e7a19f9160248082019260009290919082900301818387803b15801561056e57600080fd5b505af1158015610582573d6000803e3d6000fd5b50508454604080516370a0823160e01b815230600482015290516001600160a01b03909216935063a9059cbb9250889184916370a08231916024808301926020929190829003018186803b1580156105d957600080fd5b505afa1580156105ed573d6000803e3d6000fd5b505050506040513d602081101561060357600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561065457600080fd5b505af1158015610668573d6000803e3d6000fd5b505050506040513d602081101561067e57600080fd5b50505050509392505050565b60006106946110cd565b546001600160a01b0316905090565b6000806106ae6110cd565b805460408051630dc6eaf760e21b815260048101879052905192935060609283926001600160a01b03169163371babdc916024808301926000929190829003018186803b1580156106fe57600080fd5b505afa158015610712573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561073b57600080fd5b8101908080516040519392919084600160201b82111561075a57600080fd5b90830190602082018581111561076f57600080fd5b82518660208202830111600160201b8211171561078b57600080fd5b82525081516020918201928201910280838360005b838110156107b85781810151838201526020016107a0565b5050505090500160405260200180516040519392919084600160201b8211156107e057600080fd5b9083019060208201858111156107f557600080fd5b82518660208202830111600160201b8211171561081157600080fd5b82525081516020918201928201910280838360005b8381101561083e578181015183820152602001610826565b50505050905001604052505050915091506000935060008090505b825181101561099a57600184015483516000916001600160a01b0316906306f2bf629086908590811061088857fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156108d657600080fd5b505afa1580156108ea573d6000803e3d6000fd5b505050506040513d602081101561090057600080fd5b505183519091506001600160a01b038216906359e948629085908590811061092457fe5b60200260200101516040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561096057600080fd5b505afa158015610974573d6000803e3d6000fd5b505050506040513d602081101561098a57600080fd5b5051959095019450600101610859565b50505050919050565b60006109b083833361024f565b9392505050565b6000806109c26110cd565b9050428410156109d157600080fd5b8054604080516323b872dd60e01b81523360048201523060248201526044810189905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b158015610a2a57600080fd5b505af1158015610a3e573d6000803e3d6000fd5b505050506040513d6020811015610a5457600080fd5b5051610a915760405162461bcd60e51b815260040180806020018281038252603f8152602001806113ad603f913960400191505060405180910390fd5b80546040805163be1d24ad60e01b81526004810189905290516001600160a01b039092169163be1d24ad9160248082019260009290919082900301818387803b158015610add57600080fd5b505af1158015610af1573d6000803e3d6000fd5b505082546040805163154d950160e31b81529051606094506001600160a01b03909216925063aa6ca808916004808301926000929190829003018186803b158015610b3b57600080fd5b505afa158015610b4f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610b7857600080fd5b8101908080516040519392919084600160201b821115610b9757600080fd5b908301906020820185811115610bac57600080fd5b82518660208202830111600160201b82111715610bc857600080fd5b82525081516020918201928201910280838360005b83811015610bf5578181015183820152602001610bdd565b50505050919091016040525092935060009250829150505b8251811015610ccd576000838281518110610c2457fe5b602002602001015190506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610c8657600080fd5b505afa158015610c9a573d6000803e3d6000fd5b505050506040513d6020811015610cb057600080fd5b50519050610cbf82828a611206565b909301925050600101610c0d565b50868111610d0c5760405162461bcd60e51b815260040180806020018281038252603a8152602001806113ec603a913960400191505060405180910390fd5b979650505050505050565b60405180602361142682396023019050604051809103902081565b600080610d3d6110cd565b805460408051630dc6eaf760e21b815260048101879052905192935060609283926001600160a01b03169163371babdc916024808301926000929190829003018186803b158015610d8d57600080fd5b505afa158015610da1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040908152811015610dca57600080fd5b8101908080516040519392919084600160201b821115610de957600080fd5b908301906020820185811115610dfe57600080fd5b82518660208202830111600160201b82111715610e1a57600080fd5b82525081516020918201928201910280838360005b83811015610e47578181015183820152602001610e2f565b5050505090500160405260200180516040519392919084600160201b821115610e6f57600080fd5b908301906020820185811115610e8457600080fd5b82518660208202830111600160201b82111715610ea057600080fd5b82525081516020918201928201910280838360005b83811015610ecd578181015183820152602001610eb5565b50505050905001604052505050915091506000935060008090505b825181101561099a57600184015483516000916001600160a01b0316906306f2bf6290869085908110610f1757fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610f6557600080fd5b505afa158015610f79573d6000803e3d6000fd5b505050506040513d6020811015610f8f57600080fd5b505183519091506001600160a01b038216906395b68fe790859085908110610fb357fe5b60200260200101516040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fef57600080fd5b505afa158015611003573d6000803e3d6000fd5b505050506040513d602081101561101957600080fd5b5051959095019450600101610ee8565b6000611037848484336109b7565b949350505050565b60006110496110cd565b80549091506001600160a01b03161561109f576040805162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5cd959606a1b604482015290519081900360640190fd5b80546001600160a01b039384166001600160a01b031991821617825560019091018054929093169116179055565b6000806040518080611426602391396040519081900360230190209392505050565b6000806110fa6110cd565b6001810154604080516303795fb160e11b81526001600160a01b038881166004830152915193945060009391909216916306f2bf62916024808301926020929190829003018186803b15801561114f57600080fd5b505afa158015611163573d6000803e3d6000fd5b505050506040513d602081101561117957600080fd5b505160408051636b1d4db760e01b815260048101879052600019602482015290519192506001600160a01b03831691636b1d4db7914791604480830192602092919082900301818588803b1580156111d057600080fd5b505af11580156111e4573d6000803e3d6000fd5b50505050506040513d60208110156111fb57600080fd5b505195945050505050565b6000806112116110cd565b6001810154604080516303795fb160e11b81526001600160a01b038981166004830152915193945060009391909216916306f2bf62916024808301926020929190829003018186803b15801561126657600080fd5b505afa15801561127a573d6000803e3d6000fd5b505050506040513d602081101561129057600080fd5b50516040805163095ea7b360e01b81526001600160a01b0380841660048301526024820189905291519293509088169163095ea7b3916044808201926020929091908290030181600087803b1580156112e857600080fd5b505af11580156112fc573d6000803e3d6000fd5b505050506040513d602081101561131257600080fd5b505060408051637237e03160e01b8152600481018790526001602482015260001960448201526001600160a01b038681166064830152915191831691637237e031916084808201926020929091908290030181600087803b15801561137657600080fd5b505af115801561138a573d6000803e3d6000fd5b505050506040513d60208110156113a057600080fd5b5051969550505050505056fe50556e6973776170506f6f6c5265636970652e746f6b656e546f4574685472616e73666572496e7075743a207472616e7366657246726f6d206661696c656450556e6973776170506f6f6c5265636970652e746f6b656e546f4574685472616e73666572496e7075743a206e6f7420656e6f7567682045544850556e6973776170506f6f6c5265636970652e73746f726167652e6c6f636174696f6ea2646970667358221220e0070850c6cbf8ddff2e004a64e2a50ea5762c837180e7738967208f911b043a64736f6c63430006040033";
