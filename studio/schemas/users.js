export default {
	name: "users",
	title: "Users",
	type: "document",
	fields: [
		{
			name: "userName",
			title: "Username",
			type: "string"
		},
		{
			name: "userAddress",
			title: "Wallet Address",
			type: "string"
		},
		{
			name: "userTrees",
			title: "Planted Trees",
			type: "number"
		},
		{
			name: "userCountry",
			title: "Country",
			type: "string"
		},
		{
			name: "userAvatar",
			title: "Avatar",
			type: "image"
		}
	]
}
