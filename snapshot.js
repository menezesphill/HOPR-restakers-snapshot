const { ethers } = require('ethers')
const Web3 = require('web3')
const RPCNodeProvider = 'https://xdai-archive.blockscout.com/'
const web3 = new Web3('https://rpc.gnosischain.com/')

const HOPR_TOKEN_ADDRESS = '0xD057604A14982FE8D88c5fC25Aac3267eA142a08'
// Instantiating ethers provider
const ethersProvider = new ethers.providers.JsonRpcProvider(RPCNodeProvider)
// HOPR Token ABI (We need to track its "Transfer" events)
const ABI = '[{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"mintingFinished","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"result"}],"name":"approve","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setBridgeContract","inputs":[{"type":"address","name":"_bridgeContract"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"transferFrom","inputs":[{"type":"address","name":"_sender"},{"type":"address","name":"_recipient"},{"type":"uint256","name":"_amount"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"PERMIT_TYPEHASH","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":""}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"DOMAIN_SEPARATOR","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":"result"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_addedValue"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"transferAndCall","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"},{"type":"bytes","name":"_data"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"mint","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_amount"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"_value"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"version","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"decreaseApproval","inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_subtractedValue"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"claimTokens","inputs":[{"type":"address","name":"_token"},{"type":"address","name":"_to"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"balanceOf","inputs":[{"type":"address","name":"_owner"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isBridge","inputs":[{"type":"address","name":"_address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"finishMinting","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"nonces","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"pure","payable":false,"outputs":[{"type":"uint64","name":"major"},{"type":"uint64","name":"minor"},{"type":"uint64","name":"patch"}],"name":"getTokenInterfacesVersion","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"permit","inputs":[{"type":"address","name":"_holder"},{"type":"address","name":"_spender"},{"type":"uint256","name":"_nonce"},{"type":"uint256","name":"_expiry"},{"type":"bool","name":"_allowed"},{"type":"uint8","name":"_v"},{"type":"bytes32","name":"_r"},{"type":"bytes32","name":"_s"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"subtractedValue"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"transfer","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"push","inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_amount"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"move","inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_amount"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"PERMIT_TYPEHASH_LEGACY","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"bridgeContract","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"permit","inputs":[{"type":"address","name":"_holder"},{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"},{"type":"uint256","name":"_deadline"},{"type":"uint8","name":"_v"},{"type":"bytes32","name":"_r"},{"type":"bytes32","name":"_s"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"increaseApproval","inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_addedValue"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"allowance","inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"pull","inputs":[{"type":"address","name":"_from"},{"type":"uint256","name":"_amount"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"_newOwner"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"expirations","inputs":[{"type":"address","name":""},{"type":"address","name":""}],"constant":true},{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"string","name":"_name"},{"type":"string","name":"_symbol"},{"type":"uint8","name":"_decimals"},{"type":"uint256","name":"_chainId"}]},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"MintFinished","inputs":[],"anonymous":false},{"type":"event","name":"OwnershipRenounced","inputs":[{"type":"address","name":"previousOwner","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false},{"type":"event","name":"Burn","inputs":[{"type":"address","name":"burner","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"spender","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false}]'

// Local instance of HOPR Token
const contract = new ethers.Contract(
  HOPR_TOKEN_ADDRESS,
  ABI,
  ethersProvider.getSigner(0)
)

// @dev you can check if the eth node provider is working by toggling the following block comment:
/* ethersProvider.getBlockNumber().then((result) => {
  console.log('Current Block Number:' + result)
}) */

// List events for a give "eventFilter"
async function listEvents (_filter, _fromBlock, _toBlock) {
  try {
    const events = await contract.queryFilter(_filter, _fromBlock, _toBlock)
    return events
  } catch (e) {
    console.log(e)
  }
}

// SNAPSHOT DETAILS
// At a given point (i.e. SX_SNAPSHOT_BLOCK) the balance of
// the contract HoprStakeX is checked by calculating user deposits
//
// Since at block height SX_SNAPSHOT_BLOCK withdraws are locked,
// the total amount deposited to HoprStakeX is the user
// balance.

async function fetchData (_startingBlock, _endBlock, _contractAddress) {
  const formatedData = new Map()

  console.log(`Fetching events from Blocks ${_startingBlock} to ${_endBlock}`)
  // Create event filter for "Transfer" from anywhere to target Staking Contract
  const eventFilter = contract.filters.Transfer(null, _contractAddress)
  const data = await listEvents(eventFilter, _startingBlock, _endBlock)

  // Checking for duplicate deposits from same address and summing up totals
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (!formatedData.has(data[i].args.from)) {
      formatedData.set(data[i].args.from, parseInt(web3.utils.fromWei(`${data[i].args.value}`, 'ether')))
    } else {
      const newCount = formatedData.get(data[i].args.from) + parseInt(web3.utils.fromWei(`${data[i].args.value}`, 'ether'))
      formatedData.set(data[i].args.from, newCount)
    }
  }
  console.log(`${Object.keys(data).length} entries found from ${formatedData.size} unique addresses!`)

  return formatedData
}

module.exports = { fetchData }
