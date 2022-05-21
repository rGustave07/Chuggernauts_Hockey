module.exports = {
	"*.{js, ts, jsx, tsx}": [
      "npm run lint",
      () => "npm run type-check",
      "npm run test"
	]
}