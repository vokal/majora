module.exports = {
	options:
	{
		mangle: true,
		compress: {},
		banner: "/*! <%= pkg.name %> <%= grunt.template.today( 'yyyy-mm-dd' ) %> */",
		sourceMap: false
	},
	project:
	{
		files:
		{
			"dist/majora.min.js": [
				"source/*.js"
			]
		}
	}
};
