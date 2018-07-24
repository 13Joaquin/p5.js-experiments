function ShaderLoader(url) { this.init(url); }

ShaderLoader.prototype = {
	
	parse : function()
	{
		this.data = this.request.response;
		this._onParsed()
	}
}

ShaderLoader.prototype.__proto__ = services.DataLoader.prototype;