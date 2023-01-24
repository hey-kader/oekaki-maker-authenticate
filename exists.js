const addr = 			"0x27524bfF4423404F4b516367Bd6a67c71876aa7D"
const test_addr = "0x3Db78767fc98de7EF7Fa5ea18C5AcAf17fcfc51C"
const me = "0x33f42fe923d90F4989683318C9d0f8d138B72E01"

const contract = "0x8f7a232aF2347CC5C9C3A245C2f163D248178eaa"


function existential (address, contract) {
	const url = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress="+contract+"&address="+address+"&tags=latest&apikey=8FG3JMZ9USS4NTA6YKEKHINU56SEPPVBJR"
	fetch(url, {method: "GET", headers: {'ContentType': 'application/json'},})
		.then ((response) => response.json())
		.then((data) => {
			if (data.result > 0) {
				console.log(address + '\t' + true)
				console.log(data)
				return true
			}
			else {
				console.log(address + '\t' + false)
				console.log(data)
				return false
			}

		})
}

var testWallets = new Array ()
testWallets.push (test_addr,addr)


console.log(existential (test_addr, contract))
console.log(existential (addr, contract))
console.log(existential(me, contract))
