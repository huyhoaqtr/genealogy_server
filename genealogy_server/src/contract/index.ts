import Web3 from "web3";
import { ContractMap } from "./contract-map";
import envConfig from "~/configs/environment";
const web3 = new Web3(envConfig.CHAIN_NET);
const contract = new web3.eth.Contract(
  ContractMap.abi,
  envConfig.CONTRACT_ADDRESS
);

const account = web3.eth.accounts.wallet.add(process.env.ACCOUNT_PRIVATE_KEY!);
const senderAccount = account[0].address;

export { web3, contract, senderAccount };
