import algosdk from "algosdk";
import MyAlgoConnect from "@randlabs/myalgo-connect";

const algodClient = new algosdk.Algodv2("", "https://api.algoexplorer.io", "");
const myAlgoConnect = new MyAlgoConnect();

export const CheckAlgoSigner = () => {
  if (typeof AlgoSigner !== "undefined") {
    return true;
  } else {
    return false;
  }
};

export const algoWalletConnect = async () => {
  try {
    const response = await myAlgoConnect.connect();
    return response;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getInfo = async (account) => {
  const accountInfo = await algodClient
    .accountInformation(account.address)
    .do();
  return accountInfo;
};

export const accountGenerate = () => {
  try {
    const sdkAccount = algosdk.generateAccount();
    const account = { address: sdkAccount.addr, sk: sdkAccount.sk };
    const mnemonic = algosdk.secretKeyToMnemonic(account.sk);
    account["mnemonic"] = mnemonic;
    return account;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const recoverAccount = (data) => {
  try {
    const sdkAccount = algosdk.mnemonicToSecretKey(data);
    const account = { address: sdkAccount.addr, sk: sdkAccount.sk };
    account["mnemonic"] = data;
    return account;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
