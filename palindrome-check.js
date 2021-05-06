function isPalindrome(string) {
	const reverse = string.split('').reverse().join('');
	return string === reverse;
}