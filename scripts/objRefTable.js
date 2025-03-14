const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.Flash,
		C3.Behaviors.Sin,
		C3.Plugins.Particles,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Sin.Exps.CyclePosition,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Teclado: 0},
	{fundo: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{Piscar: 0},
	{Jogador: 0},
	{Caixa: 0},
	{Senóide: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Partículas: 0},
	{Caveira: 0},
	{Inimigo: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{TVida: 0},
	{Texto: 0},
	{TColeta: 0},
	{estado: 0},
	{Caveiras: 0},
	{Pontos: 0},
	{vidas: 0}
];

self.InstanceType = {
	Teclado: class extends self.IInstance {},
	fundo: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Jogador: class extends self.ISpriteInstance {},
	Caixa: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Partículas: class extends self.IParticlesInstance {},
	Caveira: class extends self.ISpriteInstance {},
	Inimigo: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	TVida: class extends self.ITextInstance {},
	Texto: class extends self.ITextInstance {},
	TColeta: class extends self.ITextInstance {}
}