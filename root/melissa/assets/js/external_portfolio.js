RBExternalPortfolio=function(e,t,r,n)
{
	var o=this;
	o.domain=e,
	o.rows=r,
	o.columns=n,
	o.user_name=t,
	o.getHeight=function()
	{
		return 222*o.rows+85
	},
	o.getWidth=function()
	{ 
		return 240*o.columns+26
	},
	o.getSrc=function()
	{
		return document.location.protocol+"//"+o.domain+"/people/"+o.user_name+"/external-portfolio?count="+o.rows*o.columns
	},
	o.createIframe=function()
	{
		var e=document.createElement("iframe");
		return e.src=o.getSrc(),
		e.width=o.getWidth(),
		e.height=o.getHeight(),
		e.frameBorder=0,
		e.scrolling="no",
		e.setAttribute("allowtransparency","true"),
		e
	},
	o.renderIframe=function()
	{
		var e=document.getElementById("rb-xzfcxvzx");e.parentNode.replaceChild(o.createIframe(),e)}
	};