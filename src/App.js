import React from "react"
import {useState, useEffect} from "react"
import './App.css';

import {useWeb3React} from '@web3-react/core'

import {InjectedConnector} from "@web3-react/walletlink-connector"
import {WalletConnectConnector} from "@web3-react/walletlink-connector"
import {WalletLinkConnector} from "@web3-react/walletlink-connector"

import {injected} from './components/wallet/Connector'
import {Modal} from "./Modal"

const WalletLink = new WalletLinkConnector({
	rpcUrl: 'https://mainnet.infura.io/v3/986053df6f7e4ef8aa0860db9f4efccb',
	bridge: 'https://bridge.walletconnect.org',
	qrcode: true
})

const contract = "0x8f7a232aF2347CC5C9C3A245C2f163D248178eaa"

function existential (address, contract) {
	const url = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress="+contract+"&address="+address+"&tags=latest&apikey=8FG3JMZ9USS4NTA6YKEKHINU56SEPPVBJR"
	fetch(url, {method: "GET", headers: {'Content-Type': 'text/plain'},})
		.then ((response) => response.json())
		.then((data) => {
			if (data.result > 0) {
				console.log(address + '\t' + 'true')
				console.log(data)
				return true
			}
			else {
				console.log(address + '\t' + 'false')
				console.log(data)
				return false
			}
		})
}

function App() {
	const { account, active, activate, deactivate, library, chainId } = useWeb3React();
	const [allowed, setAllowed] = useState(null)
	const address = useState()

	useEffect( () => {
		if (account) {
			setAllowed(allowed, existential(account, contract))
		}

	}, [account, activate])
	return (
		<div>
			<button onClick={() => {activate(WalletLink)}}> coinbase </button>
			<h1 id="wallet">{account}</h1>
			<h1 id="auth">{allowed ? "true" : "false"}</h1>
			
		</div>
	)
}

export default App;
