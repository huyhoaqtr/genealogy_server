export const ContractMap = {
  contractName: "FileStorage",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "tribeId",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ownerId",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ipfsAddress",
          type: "string",
        },
      ],
      name: "FileAdded",
      type: "event",
    },
    {
      inputs: [],
      name: "fileCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "files",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "tribeId",
          type: "string",
        },
        {
          internalType: "string",
          name: "ownerId",
          type: "string",
        },
        {
          internalType: "string",
          name: "ipfsAddress",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "tribeId",
          type: "string",
        },
        {
          internalType: "string",
          name: "ownerId",
          type: "string",
        },
        {
          internalType: "string",
          name: "ipfsAddress",
          type: "string",
        },
      ],
      name: "addFile",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "getFile",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.0+commit.c7dfd78e"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"tribeId","type":"string"},{"indexed":false,"internalType":"string","name":"ownerId","type":"string"},{"indexed":false,"internalType":"string","name":"ipfsAddress","type":"string"}],"name":"FileAdded","type":"event"},{"inputs":[{"internalType":"string","name":"tribeId","type":"string"},{"internalType":"string","name":"ownerId","type":"string"},{"internalType":"string","name":"ipfsAddress","type":"string"}],"name":"addFile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fileCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"files","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"tribeId","type":"string"},{"internalType":"string","name":"ownerId","type":"string"},{"internalType":"string","name":"ipfsAddress","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/FileStorage.sol":"FileStorage"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/FileStorage.sol":{"keccak256":"0xbae0c10c2daf3c15123fb0934637e03814083b2b780f3b3607229fcfbb931a30","license":"MIT","urls":["bzz-raw://b33e9556f91044bf02c900b9c2f04224abf904402f753c7ad74cb68b680d1973","dweb:/ipfs/QmdfnN9ysGppsze2zSuMxx3TFDNR9q6wv9EzLF351f1q6z"]}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b50610ad0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632bfda313146100515780634395351914610083578063d45a5685146100a1578063f4c714b4146100bd575b600080fd5b61006b6004803603810190610066919061076f565b6100f0565b60405161007a939291906107e0565b60405180910390f35b61008b6102f3565b604051610098919061082c565b60405180910390f35b6100bb60048036038101906100b691906106d8565b6102f9565b005b6100d760048036038101906100d2919061076f565b6103f0565b6040516100e79493929190610847565b60405180910390f35b606080606060008060008681526020019081526020016000206040518060800160405290816000820154815260200160018201805461012e9061096a565b80601f016020809104026020016040519081016040528092919081815260200182805461015a9061096a565b80156101a75780601f1061017c576101008083540402835291602001916101a7565b820191906000526020600020905b81548152906001019060200180831161018a57829003601f168201915b505050505081526020016002820180546101c09061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ec9061096a565b80156102395780601f1061020e57610100808354040283529160200191610239565b820191906000526020600020905b81548152906001019060200180831161021c57829003601f168201915b505050505081526020016003820180546102529061096a565b80601f016020809104026020016040519081016040528092919081815260200182805461027e9061096a565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b5050505050815250509050806020015181604001518260600151935093509350509193909250565b60015481565b604051806080016040528060015481526020018481526020018381526020018281525060008060015481526020019081526020016000206000820151816000015560208201518160010190805190602001906103569291906105b8565b5060408201518160020190805190602001906103739291906105b8565b5060608201518160030190805190602001906103909291906105b8565b509050507f9695d220e73c26e28712d873afbc71aee63d7e8cb5feefe9f943026925824edc6001548484846040516103cb9493929190610847565b60405180910390a1600160008154809291906103e69061099c565b9190505550505050565b60006020528060005260406000206000915090508060000154908060010180546104199061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546104459061096a565b80156104925780601f1061046757610100808354040283529160200191610492565b820191906000526020600020905b81548152906001019060200180831161047557829003601f168201915b5050505050908060020180546104a79061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546104d39061096a565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b5050505050908060030180546105359061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546105619061096a565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b5050505050905084565b8280546105c49061096a565b90600052602060002090601f0160209004810192826105e6576000855561062d565b82601f106105ff57805160ff191683800117855561062d565b8280016001018555821561062d579182015b8281111561062c578251825591602001919060010190610611565b5b50905061063a919061063e565b5090565b5b8082111561065757600081600090555060010161063f565b5090565b600061066e610669846108d2565b6108a1565b90508281526020810184848401111561068657600080fd5b610691848285610928565b509392505050565b600082601f8301126106aa57600080fd5b81356106ba84826020860161065b565b91505092915050565b6000813590506106d281610a83565b92915050565b6000806000606084860312156106ed57600080fd5b600084013567ffffffffffffffff81111561070757600080fd5b61071386828701610699565b935050602084013567ffffffffffffffff81111561073057600080fd5b61073c86828701610699565b925050604084013567ffffffffffffffff81111561075957600080fd5b61076586828701610699565b9150509250925092565b60006020828403121561078157600080fd5b600061078f848285016106c3565b91505092915050565b60006107a382610902565b6107ad818561090d565b93506107bd818560208601610937565b6107c681610a72565b840191505092915050565b6107da8161091e565b82525050565b600060608201905081810360008301526107fa8186610798565b9050818103602083015261080e8185610798565b905081810360408301526108228184610798565b9050949350505050565b600060208201905061084160008301846107d1565b92915050565b600060808201905061085c60008301876107d1565b818103602083015261086e8186610798565b905081810360408301526108828185610798565b905081810360608301526108968184610798565b905095945050505050565b6000604051905081810181811067ffffffffffffffff821117156108c8576108c7610a43565b5b8060405250919050565b600067ffffffffffffffff8211156108ed576108ec610a43565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561095557808201518184015260208101905061093a565b83811115610964576000848401525b50505050565b6000600282049050600182168061098257607f821691505b6020821081141561099657610995610a14565b5b50919050565b60006109a78261091e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156109da576109d96109e5565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610a8c8161091e565b8114610a9757600080fd5b5056fea264697066735822122074e30d306c2d905b5c5d4dc2a049f503a610aa3cc0cecbdc40799d88d31fc35a64736f6c63430008000033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80632bfda313146100515780634395351914610083578063d45a5685146100a1578063f4c714b4146100bd575b600080fd5b61006b6004803603810190610066919061076f565b6100f0565b60405161007a939291906107e0565b60405180910390f35b61008b6102f3565b604051610098919061082c565b60405180910390f35b6100bb60048036038101906100b691906106d8565b6102f9565b005b6100d760048036038101906100d2919061076f565b6103f0565b6040516100e79493929190610847565b60405180910390f35b606080606060008060008681526020019081526020016000206040518060800160405290816000820154815260200160018201805461012e9061096a565b80601f016020809104026020016040519081016040528092919081815260200182805461015a9061096a565b80156101a75780601f1061017c576101008083540402835291602001916101a7565b820191906000526020600020905b81548152906001019060200180831161018a57829003601f168201915b505050505081526020016002820180546101c09061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ec9061096a565b80156102395780601f1061020e57610100808354040283529160200191610239565b820191906000526020600020905b81548152906001019060200180831161021c57829003601f168201915b505050505081526020016003820180546102529061096a565b80601f016020809104026020016040519081016040528092919081815260200182805461027e9061096a565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b5050505050815250509050806020015181604001518260600151935093509350509193909250565b60015481565b604051806080016040528060015481526020018481526020018381526020018281525060008060015481526020019081526020016000206000820151816000015560208201518160010190805190602001906103569291906105b8565b5060408201518160020190805190602001906103739291906105b8565b5060608201518160030190805190602001906103909291906105b8565b509050507f9695d220e73c26e28712d873afbc71aee63d7e8cb5feefe9f943026925824edc6001548484846040516103cb9493929190610847565b60405180910390a1600160008154809291906103e69061099c565b9190505550505050565b60006020528060005260406000206000915090508060000154908060010180546104199061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546104459061096a565b80156104925780601f1061046757610100808354040283529160200191610492565b820191906000526020600020905b81548152906001019060200180831161047557829003601f168201915b5050505050908060020180546104a79061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546104d39061096a565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b5050505050908060030180546105359061096a565b80601f01602080910402602001604051908101604052809291908181526020018280546105619061096a565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b5050505050905084565b8280546105c49061096a565b90600052602060002090601f0160209004810192826105e6576000855561062d565b82601f106105ff57805160ff191683800117855561062d565b8280016001018555821561062d579182015b8281111561062c578251825591602001919060010190610611565b5b50905061063a919061063e565b5090565b5b8082111561065757600081600090555060010161063f565b5090565b600061066e610669846108d2565b6108a1565b90508281526020810184848401111561068657600080fd5b610691848285610928565b509392505050565b600082601f8301126106aa57600080fd5b81356106ba84826020860161065b565b91505092915050565b6000813590506106d281610a83565b92915050565b6000806000606084860312156106ed57600080fd5b600084013567ffffffffffffffff81111561070757600080fd5b61071386828701610699565b935050602084013567ffffffffffffffff81111561073057600080fd5b61073c86828701610699565b925050604084013567ffffffffffffffff81111561075957600080fd5b61076586828701610699565b9150509250925092565b60006020828403121561078157600080fd5b600061078f848285016106c3565b91505092915050565b60006107a382610902565b6107ad818561090d565b93506107bd818560208601610937565b6107c681610a72565b840191505092915050565b6107da8161091e565b82525050565b600060608201905081810360008301526107fa8186610798565b9050818103602083015261080e8185610798565b905081810360408301526108228184610798565b9050949350505050565b600060208201905061084160008301846107d1565b92915050565b600060808201905061085c60008301876107d1565b818103602083015261086e8186610798565b905081810360408301526108828185610798565b905081810360608301526108968184610798565b905095945050505050565b6000604051905081810181811067ffffffffffffffff821117156108c8576108c7610a43565b5b8060405250919050565b600067ffffffffffffffff8211156108ed576108ec610a43565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561095557808201518184015260208101905061093a565b83811115610964576000848401525b50505050565b6000600282049050600182168061098257607f821691505b6020821081141561099657610995610a14565b5b50919050565b60006109a78261091e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156109da576109d96109e5565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610a8c8161091e565b8114610a9757600080fd5b5056fea264697066735822122074e30d306c2d905b5c5d4dc2a049f503a610aa3cc0cecbdc40799d88d31fc35a64736f6c63430008000033",
  immutableReferences: {},
  generatedSources: [],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:7054:1",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "91:260:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "101:74:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "167:6:1",
                          },
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "125:41:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "125:49:1",
                      },
                    ],
                    functionName: {
                      name: "allocateMemory",
                      nodeType: "YulIdentifier",
                      src: "110:14:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "110:65:1",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "101:5:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "191:5:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "198:6:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "184:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "184:21:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "184:21:1",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "214:27:1",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "229:5:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "236:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "225:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "225:16:1",
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "218:3:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "279:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "288:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "291:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "281:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "281:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "281:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "260:3:1",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "265:6:1",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "256:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "256:16:1",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "274:3:1",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "253:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "253:25:1",
                  },
                  nodeType: "YulIf",
                  src: "250:2:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "328:3:1",
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "333:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "338:6:1",
                      },
                    ],
                    functionName: {
                      name: "copy_calldata_to_memory",
                      nodeType: "YulIdentifier",
                      src: "304:23:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "304:41:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "304:41:1",
                },
              ],
            },
            name: "abi_decode_available_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "64:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "69:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "77:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "85:5:1",
                type: "",
              },
            ],
            src: "7:344:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "433:211:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "482:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "491:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "494:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "484:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "484:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "484:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "461:6:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "469:4:1",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "457:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "457:17:1",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "476:3:1",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "453:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "453:27:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "446:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "446:35:1",
                  },
                  nodeType: "YulIf",
                  src: "443:2:1",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "507:34:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "534:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "521:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "521:20:1",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "511:6:1",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "550:88:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "611:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "619:4:1",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "607:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "607:17:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "626:6:1",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "634:3:1",
                      },
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "559:47:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "559:79:1",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "550:5:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "411:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "419:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "427:5:1",
                type: "",
              },
            ],
            src: "371:273:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "702:87:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "712:29:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "734:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "721:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "721:20:1",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "712:5:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "777:5:1",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "750:26:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "750:33:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "750:33:1",
                },
              ],
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "680:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "688:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "696:5:1",
                type: "",
              },
            ],
            src: "650:139:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "925:761:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "971:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "980:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "983:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "973:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "973:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "973:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "946:7:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "955:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "942:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "942:23:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "967:2:1",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "938:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "938:32:1",
                  },
                  nodeType: "YulIf",
                  src: "935:2:1",
                },
                {
                  nodeType: "YulBlock",
                  src: "997:220:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1012:45:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1043:9:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1054:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1039:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1039:17:1",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "1026:12:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1026:31:1",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1016:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1104:16:1",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1113:1:1",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1116:1:1",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1106:6:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1106:12:1",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1106:12:1",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1076:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1084:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1073:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1073:30:1",
                      },
                      nodeType: "YulIf",
                      src: "1070:2:1",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1134:73:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1179:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1190:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1175:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1175:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1199:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1144:30:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1144:63:1",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1134:6:1",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "1227:221:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1242:46:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1273:9:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1284:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1269:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1269:18:1",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "1256:12:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1256:32:1",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1246:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1335:16:1",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1344:1:1",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1347:1:1",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1337:6:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1337:12:1",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1337:12:1",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1307:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1315:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1304:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1304:30:1",
                      },
                      nodeType: "YulIf",
                      src: "1301:2:1",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1365:73:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1410:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1421:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1406:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1406:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1430:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1375:30:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1375:63:1",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "1365:6:1",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "1458:221:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1473:46:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1504:9:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1515:2:1",
                                type: "",
                                value: "64",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1500:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1500:18:1",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "1487:12:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1487:32:1",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1477:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1566:16:1",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1575:1:1",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1578:1:1",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1568:6:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1568:12:1",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1568:12:1",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1538:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1546:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1535:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1535:30:1",
                      },
                      nodeType: "YulIf",
                      src: "1532:2:1",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1596:73:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1641:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1652:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1637:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1637:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1661:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1606:30:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1606:63:1",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "1596:6:1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "879:9:1",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "890:7:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "902:6:1",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "910:6:1",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "918:6:1",
                type: "",
              },
            ],
            src: "795:891:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1758:196:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1804:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1813:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1816:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1806:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1806:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1806:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1779:7:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1788:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1775:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1775:23:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1800:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1771:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1771:32:1",
                  },
                  nodeType: "YulIf",
                  src: "1768:2:1",
                },
                {
                  nodeType: "YulBlock",
                  src: "1830:117:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1845:15:1",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1859:1:1",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1849:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1874:63:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1909:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1920:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1905:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1905:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1929:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "1884:20:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1884:53:1",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1874:6:1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1728:9:1",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1739:7:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1751:6:1",
                type: "",
              },
            ],
            src: "1692:262:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2052:272:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2062:53:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2109:5:1",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "2076:32:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2076:39:1",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "2066:6:1",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "2124:78:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2190:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2195:6:1",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2131:58:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2131:71:1",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "2124:3:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2237:5:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2244:4:1",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2233:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2233:16:1",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2251:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2256:6:1",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "2211:21:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2211:52:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2211:52:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2272:46:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2283:3:1",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2310:6:1",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "2288:21:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2288:29:1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2279:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2279:39:1",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "2272:3:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2033:5:1",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "2040:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2048:3:1",
                type: "",
              },
            ],
            src: "1960:364:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2395:53:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "2412:3:1",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2435:5:1",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "2417:17:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2417:24:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2405:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2405:37:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2405:37:1",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2383:5:1",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "2390:3:1",
                type: "",
              },
            ],
            src: "2330:118:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2668:501:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2678:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2690:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2701:2:1",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2686:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2686:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2678:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2725:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2736:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2721:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2721:17:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2744:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2750:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2740:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2740:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2714:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2714:47:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2714:47:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2770:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2842:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2851:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2778:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2778:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2770:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2877:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2888:2:1",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2873:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2873:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2897:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2903:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2893:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2893:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2866:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2866:48:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2866:48:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2923:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "2995:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3004:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2931:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2931:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2923:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3030:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3041:2:1",
                            type: "",
                            value: "64",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3026:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3026:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "3050:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3056:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3046:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3046:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3019:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3019:48:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3019:48:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3076:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "3148:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3157:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3084:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3084:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3076:4:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2624:9:1",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "2636:6:1",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2644:6:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2652:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2663:4:1",
                type: "",
              },
            ],
            src: "2454:715:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3273:124:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3283:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3295:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3306:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3291:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3291:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3283:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "3363:6:1",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3376:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3387:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3372:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3372:17:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3319:43:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3319:71:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3319:71:1",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3245:9:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3257:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3268:4:1",
                type: "",
              },
            ],
            src: "3175:222:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3645:584:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3655:27:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3667:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3678:3:1",
                        type: "",
                        value: "128",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3663:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3663:19:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3655:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "3736:6:1",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3749:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3760:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3745:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3745:17:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3692:43:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3692:71:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3692:71:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3784:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3795:2:1",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3780:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3780:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "3804:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3810:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3800:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3800:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3773:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3773:48:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3773:48:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3830:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "3902:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3911:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3838:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3838:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3830:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3937:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3948:2:1",
                            type: "",
                            value: "64",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3933:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3933:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "3957:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3963:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3953:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3953:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3926:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3926:48:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3926:48:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3983:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "4055:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "4064:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3991:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3991:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3983:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4090:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4101:2:1",
                            type: "",
                            value: "96",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4086:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4086:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "4110:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4116:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4106:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4106:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4079:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4079:48:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4079:48:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "4136:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value3",
                        nodeType: "YulIdentifier",
                        src: "4208:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "4217:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4144:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4144:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4136:4:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3593:9:1",
                type: "",
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "3605:6:1",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "3613:6:1",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "3621:6:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3629:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3640:4:1",
                type: "",
              },
            ],
            src: "3403:826:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4275:243:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4285:19:1",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4301:2:1",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "4295:5:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4295:9:1",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "4285:6:1",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4313:35:1",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "4335:6:1",
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "4343:4:1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4331:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4331:17:1",
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "4317:10:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4459:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4461:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4461:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4461:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4402:10:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4414:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "4399:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4399:34:1",
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4438:10:1",
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "4450:6:1",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "4435:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4435:22:1",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "4396:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4396:62:1",
                  },
                  nodeType: "YulIf",
                  src: "4393:2:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4497:2:1",
                        type: "",
                        value: "64",
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "4501:10:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4490:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4490:22:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4490:22:1",
                },
              ],
            },
            name: "allocateMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4259:4:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "4268:6:1",
                type: "",
              },
            ],
            src: "4235:283:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4591:265:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4696:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4698:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4698:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4698:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4668:6:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4676:18:1",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4665:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4665:30:1",
                  },
                  nodeType: "YulIf",
                  src: "4662:2:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "4748:41:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4764:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4772:4:1",
                            type: "",
                            value: "0x1f",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4760:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4760:17:1",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4783:4:1",
                            type: "",
                            value: "0x1f",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "4779:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4779:9:1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4756:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4756:33:1",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "4748:4:1",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "4826:23:1",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "4838:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4844:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4834:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4834:15:1",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "4826:4:1",
                    },
                  ],
                },
              ],
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4575:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4586:4:1",
                type: "",
              },
            ],
            src: "4524:332:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4921:40:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4932:22:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4948:5:1",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "4942:5:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4942:12:1",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "4932:6:1",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4904:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4914:6:1",
                type: "",
              },
            ],
            src: "4862:99:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5063:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5080:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5085:6:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5073:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5073:19:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5073:19:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "5101:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5120:3:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5125:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5116:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5116:14:1",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "5101:11:1",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5035:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5040:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "5051:11:1",
                type: "",
              },
            ],
            src: "4967:169:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5187:32:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5197:16:1",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "5208:5:1",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "5197:7:1",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5169:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "5179:7:1",
                type: "",
              },
            ],
            src: "5142:77:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5276:103:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "5299:3:1",
                      },
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "5304:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5309:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldatacopy",
                      nodeType: "YulIdentifier",
                      src: "5286:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5286:30:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5286:30:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "5357:3:1",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5362:6:1",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5353:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5353:16:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5371:1:1",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5346:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5346:27:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5346:27:1",
                },
              ],
            },
            name: "copy_calldata_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "5258:3:1",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "5263:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5268:6:1",
                type: "",
              },
            ],
            src: "5225:154:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5434:258:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5444:10:1",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "5453:1:1",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "5448:1:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5513:63:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "5538:3:1",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "5543:1:1",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5534:3:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5534:11:1",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "5557:3:1",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "5562:1:1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "5553:3:1",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5553:11:1",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "5547:5:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5547:18:1",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "5527:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5527:39:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5527:39:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "5474:1:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5477:6:1",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "5471:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5471:13:1",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "5485:19:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "5487:15:1",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "5496:1:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5499:2:1",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "5492:3:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5492:10:1",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "5487:1:1",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "5467:3:1",
                    statements: [],
                  },
                  src: "5463:113:1",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5610:76:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "5660:3:1",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "5665:6:1",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5656:3:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5656:16:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5674:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "5649:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5649:27:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5649:27:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "5591:1:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5594:6:1",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "5588:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5588:13:1",
                  },
                  nodeType: "YulIf",
                  src: "5585:2:1",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "5416:3:1",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "5421:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5426:6:1",
                type: "",
              },
            ],
            src: "5385:307:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5749:269:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5759:22:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "5773:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5779:1:1",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "5769:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5769:12:1",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "5759:6:1",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5790:38:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "5820:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5826:1:1",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "5816:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5816:12:1",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "5794:18:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5867:51:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "5881:27:1",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "5895:6:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5903:4:1",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "5891:3:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5891:17:1",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5881:6:1",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "5847:18:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5840:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5840:26:1",
                  },
                  nodeType: "YulIf",
                  src: "5837:2:1",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5970:42:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "5984:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5984:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5984:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "5934:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5957:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5965:2:1",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "5954:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5954:14:1",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "5931:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5931:38:1",
                  },
                  nodeType: "YulIf",
                  src: "5928:2:1",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "5733:4:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5742:6:1",
                type: "",
              },
            ],
            src: "5698:320:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6067:190:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6077:33:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "6104:5:1",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6086:17:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6086:24:1",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "6077:5:1",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6200:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "6202:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6202:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6202:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "6125:5:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6132:66:1",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "6122:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6122:77:1",
                  },
                  nodeType: "YulIf",
                  src: "6119:2:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "6231:20:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "6242:5:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6249:1:1",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6238:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6238:13:1",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "6231:3:1",
                    },
                  ],
                },
              ],
            },
            name: "increment_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "6053:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "6063:3:1",
                type: "",
              },
            ],
            src: "6024:233:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6291:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6308:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6311:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6301:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6301:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6301:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6405:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6408:4:1",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6398:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6398:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6398:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6429:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6432:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "6422:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6422:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6422:15:1",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "6263:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6477:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6494:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6497:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6487:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6487:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6487:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6591:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6594:4:1",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6584:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6584:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6584:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6615:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6618:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "6608:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6608:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6608:15:1",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "6449:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6663:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6680:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6683:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6673:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6673:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6673:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6777:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6780:4:1",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6770:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6770:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6770:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6801:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6804:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "6794:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6794:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6794:15:1",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "6635:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6869:54:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6879:38:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "6897:5:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6904:2:1",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6893:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6893:14:1",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6913:2:1",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "6909:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6909:7:1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "6889:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6889:28:1",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "6879:6:1",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "6852:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "6862:6:1",
                type: "",
              },
            ],
            src: "6821:102:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6972:79:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7029:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "7038:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "7041:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "7031:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "7031:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7031:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "6995:5:1",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "7020:5:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "7002:17:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7002:24:1",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "6992:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6992:35:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "6985:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6985:43:1",
                  },
                  nodeType: "YulIf",
                  src: "6982:2:1",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "6965:5:1",
                type: "",
              },
            ],
            src: "6929:122:1",
          },
        ],
      },
      contents:
        "{\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocateMemory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function allocateMemory(size) -> memPtr {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, size)\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        // round up\n        size := and(add(length, 0x1f), not(0x1f))\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      id: 1,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap: "57:867:0:-:0;;;;;;;;;;;;;;;;;;;",
  deployedSourceMap:
    "57:867:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;705:217;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;248:24;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;403:296;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;205:37;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;705:217;769:13;784;799;824:16;843:5;:9;849:2;843:9;;;;;;;;;;;824:28;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;870:4;:12;;;884:4;:12;;;898:4;:16;;;862:53;;;;;;;705:217;;;;;:::o;248:24::-;;;;:::o;403:296::-;559:46;;;;;;;;564:9;;559:46;;;;575:7;559:46;;;;584:7;559:46;;;;593:11;559:46;;;540:5;:16;546:9;;540:16;;;;;;;;;;;:65;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;620:51;630:9;;641:7;650;659:11;620:51;;;;;;;;;:::i;:::-;;;;;;;;681:9;;:11;;;;;;;;;:::i;:::-;;;;;;403:296;;;:::o;205:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:344:1:-;;110:65;125:49;167:6;125:49;:::i;:::-;110:65;:::i;:::-;101:74;;198:6;191:5;184:21;236:4;229:5;225:16;274:3;265:6;260:3;256:16;253:25;250:2;;;291:1;288;281:12;250:2;304:41;338:6;333:3;328;304:41;:::i;:::-;91:260;;;;;;:::o;371:273::-;;476:3;469:4;461:6;457:17;453:27;443:2;;494:1;491;484:12;443:2;534:6;521:20;559:79;634:3;626:6;619:4;611:6;607:17;559:79;:::i;:::-;550:88;;433:211;;;;;:::o;650:139::-;;734:6;721:20;712:29;;750:33;777:5;750:33;:::i;:::-;702:87;;;;:::o;795:891::-;;;;967:2;955:9;946:7;942:23;938:32;935:2;;;983:1;980;973:12;935:2;1054:1;1043:9;1039:17;1026:31;1084:18;1076:6;1073:30;1070:2;;;1116:1;1113;1106:12;1070:2;1144:63;1199:7;1190:6;1179:9;1175:22;1144:63;:::i;:::-;1134:73;;997:220;1284:2;1273:9;1269:18;1256:32;1315:18;1307:6;1304:30;1301:2;;;1347:1;1344;1337:12;1301:2;1375:63;1430:7;1421:6;1410:9;1406:22;1375:63;:::i;:::-;1365:73;;1227:221;1515:2;1504:9;1500:18;1487:32;1546:18;1538:6;1535:30;1532:2;;;1578:1;1575;1568:12;1532:2;1606:63;1661:7;1652:6;1641:9;1637:22;1606:63;:::i;:::-;1596:73;;1458:221;925:761;;;;;:::o;1692:262::-;;1800:2;1788:9;1779:7;1775:23;1771:32;1768:2;;;1816:1;1813;1806:12;1768:2;1859:1;1884:53;1929:7;1920:6;1909:9;1905:22;1884:53;:::i;:::-;1874:63;;1830:117;1758:196;;;;:::o;1960:364::-;;2076:39;2109:5;2076:39;:::i;:::-;2131:71;2195:6;2190:3;2131:71;:::i;:::-;2124:78;;2211:52;2256:6;2251:3;2244:4;2237:5;2233:16;2211:52;:::i;:::-;2288:29;2310:6;2288:29;:::i;:::-;2283:3;2279:39;2272:46;;2052:272;;;;;:::o;2330:118::-;2417:24;2435:5;2417:24;:::i;:::-;2412:3;2405:37;2395:53;;:::o;2454:715::-;;2701:2;2690:9;2686:18;2678:26;;2750:9;2744:4;2740:20;2736:1;2725:9;2721:17;2714:47;2778:78;2851:4;2842:6;2778:78;:::i;:::-;2770:86;;2903:9;2897:4;2893:20;2888:2;2877:9;2873:18;2866:48;2931:78;3004:4;2995:6;2931:78;:::i;:::-;2923:86;;3056:9;3050:4;3046:20;3041:2;3030:9;3026:18;3019:48;3084:78;3157:4;3148:6;3084:78;:::i;:::-;3076:86;;2668:501;;;;;;:::o;3175:222::-;;3306:2;3295:9;3291:18;3283:26;;3319:71;3387:1;3376:9;3372:17;3363:6;3319:71;:::i;:::-;3273:124;;;;:::o;3403:826::-;;3678:3;3667:9;3663:19;3655:27;;3692:71;3760:1;3749:9;3745:17;3736:6;3692:71;:::i;:::-;3810:9;3804:4;3800:20;3795:2;3784:9;3780:18;3773:48;3838:78;3911:4;3902:6;3838:78;:::i;:::-;3830:86;;3963:9;3957:4;3953:20;3948:2;3937:9;3933:18;3926:48;3991:78;4064:4;4055:6;3991:78;:::i;:::-;3983:86;;4116:9;4110:4;4106:20;4101:2;4090:9;4086:18;4079:48;4144:78;4217:4;4208:6;4144:78;:::i;:::-;4136:86;;3645:584;;;;;;;:::o;4235:283::-;;4301:2;4295:9;4285:19;;4343:4;4335:6;4331:17;4450:6;4438:10;4435:22;4414:18;4402:10;4399:34;4396:62;4393:2;;;4461:18;;:::i;:::-;4393:2;4501:10;4497:2;4490:22;4275:243;;;;:::o;4524:332::-;;4676:18;4668:6;4665:30;4662:2;;;4698:18;;:::i;:::-;4662:2;4783:4;4779:9;4772:4;4764:6;4760:17;4756:33;4748:41;;4844:4;4838;4834:15;4826:23;;4591:265;;;:::o;4862:99::-;;4948:5;4942:12;4932:22;;4921:40;;;:::o;4967:169::-;;5085:6;5080:3;5073:19;5125:4;5120:3;5116:14;5101:29;;5063:73;;;;:::o;5142:77::-;;5208:5;5197:16;;5187:32;;;:::o;5225:154::-;5309:6;5304:3;5299;5286:30;5371:1;5362:6;5357:3;5353:16;5346:27;5276:103;;;:::o;5385:307::-;5453:1;5463:113;5477:6;5474:1;5471:13;5463:113;;;5562:1;5557:3;5553:11;5547:18;5543:1;5538:3;5534:11;5527:39;5499:2;5496:1;5492:10;5487:15;;5463:113;;;5594:6;5591:1;5588:13;5585:2;;;5674:1;5665:6;5660:3;5656:16;5649:27;5585:2;5434:258;;;;:::o;5698:320::-;;5779:1;5773:4;5769:12;5759:22;;5826:1;5820:4;5816:12;5847:18;5837:2;;5903:4;5895:6;5891:17;5881:27;;5837:2;5965;5957:6;5954:14;5934:18;5931:38;5928:2;;;5984:18;;:::i;:::-;5928:2;5749:269;;;;:::o;6024:233::-;;6086:24;6104:5;6086:24;:::i;:::-;6077:33;;6132:66;6125:5;6122:77;6119:2;;;6202:18;;:::i;:::-;6119:2;6249:1;6242:5;6238:13;6231:20;;6067:190;;;:::o;6263:180::-;6311:77;6308:1;6301:88;6408:4;6405:1;6398:15;6432:4;6429:1;6422:15;6449:180;6497:77;6494:1;6487:88;6594:4;6591:1;6584:15;6618:4;6615:1;6608:15;6635:180;6683:77;6680:1;6673:88;6780:4;6777:1;6770:15;6804:4;6801:1;6794:15;6821:102;;6913:2;6909:7;6904:2;6897:5;6893:14;6889:28;6879:38;;6869:54;;;:::o;6929:122::-;7002:24;7020:5;7002:24;:::i;:::-;6995:5;6992:35;6982:2;;7041:1;7038;7031:12;6982:2;6972:79;:::o",
  source:
    "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract FileStorage {\n    struct File {\n        uint256 id;\n        string tribeId;\n        string ownerId;\n        string ipfsAddress;\n    }\n\n    mapping(uint256 => File) public files;\n    uint256 public fileCount;\n\n    event FileAdded(\n        uint256 id,\n        string tribeId,\n        string ownerId,\n        string ipfsAddress\n    );\n\n    function addFile(\n        string memory tribeId,\n        string memory ownerId,\n        string memory ipfsAddress\n    ) public {\n        files[fileCount] = File(fileCount, tribeId, ownerId, ipfsAddress);\n        emit FileAdded(fileCount, tribeId, ownerId, ipfsAddress);\n        fileCount++;\n    }\n\n    function getFile(\n        uint256 id\n    ) public view returns (string memory, string memory, string memory) {\n        File memory file = files[id];\n        return (file.tribeId, file.ownerId, file.ipfsAddress);\n    }\n}\n",
  sourcePath:
    "/Users/huyhoang/workspace/DATN/smart_contract/contracts/FileStorage.sol",
  ast: {
    absolutePath: "project:/contracts/FileStorage.sol",
    exportedSymbols: {
      FileStorage: [86],
    },
    id: 87,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", "^", "0.8", ".0"],
        nodeType: "PragmaDirective",
        src: "32:23:0",
      },
      {
        abstract: false,
        baseContracts: [],
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 86,
        linearizedBaseContracts: [86],
        name: "FileStorage",
        nodeType: "ContractDefinition",
        nodes: [
          {
            canonicalName: "FileStorage.File",
            id: 10,
            members: [
              {
                constant: false,
                id: 3,
                mutability: "mutable",
                name: "id",
                nodeType: "VariableDeclaration",
                scope: 10,
                src: "106:10:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 2,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "106:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 5,
                mutability: "mutable",
                name: "tribeId",
                nodeType: "VariableDeclaration",
                scope: 10,
                src: "126:14:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 4,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "126:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 7,
                mutability: "mutable",
                name: "ownerId",
                nodeType: "VariableDeclaration",
                scope: 10,
                src: "150:14:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 6,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "150:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 9,
                mutability: "mutable",
                name: "ipfsAddress",
                nodeType: "VariableDeclaration",
                scope: 10,
                src: "174:18:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 8,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "174:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "File",
            nodeType: "StructDefinition",
            scope: 86,
            src: "84:115:0",
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "f4c714b4",
            id: 15,
            mutability: "mutable",
            name: "files",
            nodeType: "VariableDeclaration",
            scope: 86,
            src: "205:37:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_uint256_$_t_struct$_File_$10_storage_$",
              typeString: "mapping(uint256 => struct FileStorage.File)",
            },
            typeName: {
              id: 14,
              keyType: {
                id: 11,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "213:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              nodeType: "Mapping",
              src: "205:24:0",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_uint256_$_t_struct$_File_$10_storage_$",
                typeString: "mapping(uint256 => struct FileStorage.File)",
              },
              valueType: {
                id: 13,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 12,
                  name: "File",
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 10,
                  src: "224:4:0",
                },
                referencedDeclaration: 10,
                src: "224:4:0",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_File_$10_storage_ptr",
                  typeString: "struct FileStorage.File",
                },
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "43953519",
            id: 17,
            mutability: "mutable",
            name: "fileCount",
            nodeType: "VariableDeclaration",
            scope: 86,
            src: "248:24:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 16,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "248:7:0",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "public",
          },
          {
            anonymous: false,
            id: 27,
            name: "FileAdded",
            nodeType: "EventDefinition",
            parameters: {
              id: 26,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 19,
                  indexed: false,
                  mutability: "mutable",
                  name: "id",
                  nodeType: "VariableDeclaration",
                  scope: 27,
                  src: "304:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 18,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "304:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 21,
                  indexed: false,
                  mutability: "mutable",
                  name: "tribeId",
                  nodeType: "VariableDeclaration",
                  scope: 27,
                  src: "324:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 20,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "324:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 23,
                  indexed: false,
                  mutability: "mutable",
                  name: "ownerId",
                  nodeType: "VariableDeclaration",
                  scope: 27,
                  src: "348:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 22,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "348:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 25,
                  indexed: false,
                  mutability: "mutable",
                  name: "ipfsAddress",
                  nodeType: "VariableDeclaration",
                  scope: 27,
                  src: "372:18:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 24,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "372:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "294:102:0",
            },
            src: "279:118:0",
          },
          {
            body: {
              id: 57,
              nodeType: "Block",
              src: "530:169:0",
              statements: [
                {
                  expression: {
                    id: 45,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 36,
                        name: "files",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 15,
                        src: "540:5:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_uint256_$_t_struct$_File_$10_storage_$",
                          typeString:
                            "mapping(uint256 => struct FileStorage.File storage ref)",
                        },
                      },
                      id: 38,
                      indexExpression: {
                        id: 37,
                        name: "fileCount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17,
                        src: "546:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "540:16:0",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_File_$10_storage",
                        typeString: "struct FileStorage.File storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 40,
                          name: "fileCount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 17,
                          src: "564:9:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 41,
                          name: "tribeId",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 29,
                          src: "575:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 42,
                          name: "ownerId",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 31,
                          src: "584:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 43,
                          name: "ipfsAddress",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 33,
                          src: "593:11:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        ],
                        id: 39,
                        name: "File",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10,
                        src: "559:4:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_File_$10_storage_ptr_$",
                          typeString:
                            "type(struct FileStorage.File storage pointer)",
                        },
                      },
                      id: 44,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "559:46:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_File_$10_memory_ptr",
                        typeString: "struct FileStorage.File memory",
                      },
                    },
                    src: "540:65:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_File_$10_storage",
                      typeString: "struct FileStorage.File storage ref",
                    },
                  },
                  id: 46,
                  nodeType: "ExpressionStatement",
                  src: "540:65:0",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 48,
                        name: "fileCount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17,
                        src: "630:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 49,
                        name: "tribeId",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 29,
                        src: "641:7:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        id: 50,
                        name: "ownerId",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 31,
                        src: "650:7:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        id: 51,
                        name: "ipfsAddress",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 33,
                        src: "659:11:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 47,
                      name: "FileAdded",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 27,
                      src: "620:9:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        typeString:
                          "function (uint256,string memory,string memory,string memory)",
                      },
                    },
                    id: 52,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "620:51:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 53,
                  nodeType: "EmitStatement",
                  src: "615:56:0",
                },
                {
                  expression: {
                    id: 55,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "UnaryOperation",
                    operator: "++",
                    prefix: false,
                    src: "681:11:0",
                    subExpression: {
                      id: 54,
                      name: "fileCount",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 17,
                      src: "681:9:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 56,
                  nodeType: "ExpressionStatement",
                  src: "681:11:0",
                },
              ],
            },
            functionSelector: "d45a5685",
            id: 58,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "addFile",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 34,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 29,
                  mutability: "mutable",
                  name: "tribeId",
                  nodeType: "VariableDeclaration",
                  scope: 58,
                  src: "429:21:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 28,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "429:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 31,
                  mutability: "mutable",
                  name: "ownerId",
                  nodeType: "VariableDeclaration",
                  scope: 58,
                  src: "460:21:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 30,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "460:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 33,
                  mutability: "mutable",
                  name: "ipfsAddress",
                  nodeType: "VariableDeclaration",
                  scope: 58,
                  src: "491:25:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 32,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "491:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "419:103:0",
            },
            returnParameters: {
              id: 35,
              nodeType: "ParameterList",
              parameters: [],
              src: "530:0:0",
            },
            scope: 86,
            src: "403:296:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 84,
              nodeType: "Block",
              src: "814:108:0",
              statements: [
                {
                  assignments: [71],
                  declarations: [
                    {
                      constant: false,
                      id: 71,
                      mutability: "mutable",
                      name: "file",
                      nodeType: "VariableDeclaration",
                      scope: 84,
                      src: "824:16:0",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_File_$10_memory_ptr",
                        typeString: "struct FileStorage.File",
                      },
                      typeName: {
                        id: 70,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 69,
                          name: "File",
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 10,
                          src: "824:4:0",
                        },
                        referencedDeclaration: 10,
                        src: "824:4:0",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_File_$10_storage_ptr",
                          typeString: "struct FileStorage.File",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 75,
                  initialValue: {
                    baseExpression: {
                      id: 72,
                      name: "files",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 15,
                      src: "843:5:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_mapping$_t_uint256_$_t_struct$_File_$10_storage_$",
                        typeString:
                          "mapping(uint256 => struct FileStorage.File storage ref)",
                      },
                    },
                    id: 74,
                    indexExpression: {
                      id: 73,
                      name: "id",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 60,
                      src: "849:2:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "843:9:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_File_$10_storage",
                      typeString: "struct FileStorage.File storage ref",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "824:28:0",
                },
                {
                  expression: {
                    components: [
                      {
                        expression: {
                          id: 76,
                          name: "file",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 71,
                          src: "870:4:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_File_$10_memory_ptr",
                            typeString: "struct FileStorage.File memory",
                          },
                        },
                        id: 77,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "tribeId",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 5,
                        src: "870:12:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        expression: {
                          id: 78,
                          name: "file",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 71,
                          src: "884:4:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_File_$10_memory_ptr",
                            typeString: "struct FileStorage.File memory",
                          },
                        },
                        id: 79,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "ownerId",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7,
                        src: "884:12:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        expression: {
                          id: 80,
                          name: "file",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 71,
                          src: "898:4:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_File_$10_memory_ptr",
                            typeString: "struct FileStorage.File memory",
                          },
                        },
                        id: 81,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "ipfsAddress",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 9,
                        src: "898:16:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    id: 82,
                    isConstant: false,
                    isInlineArray: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "TupleExpression",
                    src: "869:46:0",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_tuple$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$",
                      typeString:
                        "tuple(string memory,string memory,string memory)",
                    },
                  },
                  functionReturnParameters: 68,
                  id: 83,
                  nodeType: "Return",
                  src: "862:53:0",
                },
              ],
            },
            functionSelector: "2bfda313",
            id: 85,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getFile",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 61,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 60,
                  mutability: "mutable",
                  name: "id",
                  nodeType: "VariableDeclaration",
                  scope: 85,
                  src: "731:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 59,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "731:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "721:26:0",
            },
            returnParameters: {
              id: 68,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 63,
                  mutability: "mutable",
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 85,
                  src: "769:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 62,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "769:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 65,
                  mutability: "mutable",
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 85,
                  src: "784:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 64,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "784:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 67,
                  mutability: "mutable",
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 85,
                  src: "799:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 66,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "799:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "768:45:0",
            },
            scope: 86,
            src: "705:217:0",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 87,
        src: "57:867:0",
      },
    ],
    src: "32:893:0",
  },
  compiler: {
    name: "solc",
    version: "0.8.0+commit.c7dfd78e.Emscripten.clang",
  },
  networks: {
    "17000": {
      events: {},
      links: {},
      address: "0x1bc87ACe3aAAB4D2A71cabB1069823F207fabe4d",
      transactionHash:
        "0xe144514ca2e7dd7485a5cffb6149ef361cbf59c933438c4a47d27bed7f8b5868",
    },
  },
  schemaVersion: "3.4.16",
  updatedAt: "2024-12-11T14:35:05.645Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};
