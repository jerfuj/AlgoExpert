function caesarCipherEncryptor(string, key) {
	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	const strArr = string.split('');
	let res = '';
	for (let letter of strArr) {
		let idx = alphabet.indexOf(letter) + key;
		while (idx >= 26) idx -= 26
		res += alphabet[idx]
	}
	return res;
}

const str = 'xyz'
const key = 3

console.log(caesarCipherEncryptor(str, key))