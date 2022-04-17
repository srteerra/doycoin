import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// Schemas
import users from "./users"

export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		users
	])
})
