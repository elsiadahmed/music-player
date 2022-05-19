class player
{
	constructor()
	{
		var heightmain=document.getElementById('player');
		heightmain.style.height=screen.height+"px";
		if(screen.width<500)
		{
			heightmain.style.width=screen.width+"px";
		}
		var content=document.getElementById('content');
		content.style.height=screen.height-300+"px";
	}
}
onload=new player();