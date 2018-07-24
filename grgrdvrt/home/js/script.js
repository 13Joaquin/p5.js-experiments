(function (){

	var renderer = new glgl.Renderer(800, 800);
	var gl = renderer.glContext;
	
	var vShaderSrc, fShaderSrc;
	var program;
	
	var shapeTransform;
	var shape;
	var projection = geom.Matrix4.projection(70, renderer.width / renderer.height, 1, 1000);
	var time;
	
	var finalTransform;


	
	var gpl = new services.GroupLoader();
	gpl.loaders.vertex = new ShaderLoader("home/shaders/vertexShader.glsl");
	gpl.loaders.fragment = new ShaderLoader("home/shaders/fragmentShader.glsl");
	gpl.load(_onGpl, this);
	
	function _onGpl(loader)
	{
		vShaderSrc = loader.data.vertex;
		fShaderSrc = loader.data.fragment;
		init();
	}
	
	function init()
	{
		program = new glgl.Program(gl, vShaderSrc, fShaderSrc);
	
		shapeTransform = new geom.Matrix4();

		var plane = new glgl.primitives.Plane(20, 20);

        var colors = new Float32Array(plane.nVertices);
        var id = new Float32Array(plane.nVertices);
        for(var i = 0; i < plane.nVertices; i++)
        {
            colors[i] = Math.random();
            id[i] = Math.random();
            plane.vertices[3 * i] = Math.random();
            plane.vertices[3 * i + 1] = Math.random();
            plane.vertices[3 * i + 2] = Math.random();
        }

		shape = new glgl.DisplayObject({verticesPositions : plane.vertices,
                                        uvs:plane.uvs,
                                        transform:shapeTransform,
                                        colors:colors,
                                        id:id},
                                        program, plane.nVertices, plane.indices);

		time = 0;
        new tools.Loop(play, this);
	}
	
	var maxRollTime = 20;
	var rollTime = 0;

	function play()
	{
        renderer.clear();

        renderer.render(shape, {time:time, rollTime:rollTime / maxRollTime});
        rollTime--
		time++;
	}
	
	function initRoll()
	{
		if(rollTime > 0)return;
		rollTime = maxRollTime;
	}
	
	
	window.onresize = resize;
	
	function resize()
	{
		var w = window.innerWidth || document.body.clientWidth;
		var h = window.innerHeight || document.body.clientHeight;
		var size = h;//Math.min(w, h);
		renderer.resize(size, size);
	}
	
	resize();
	
	var list = document.getElementsByTagName("ul")[0];
	list.onmouseover = initRoll.bind(this);

})();
