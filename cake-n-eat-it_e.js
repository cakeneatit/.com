/*--- Avanquest WebEasy External Script ---*/


/* -------------------------------------------- */
/* Embed Image Popup                            */
/* -------------------------------------------- */

function weGetImgPos( elm )
{
	var x = 0;
	var y = 0;
	while (elm && !isNaN(elm.offsetLeft) && !isNaN(elm.offsetTop))
	{
		x += elm.offsetLeft - elm.scrollLeft;
		y += elm.offsetTop - elm.scrollTop;
		elm = elm.offsetParent;
	}
	return { top:y, left:x };
}


function wePopupImage( lnk,dvw,dvh,bgc,bds,bdc,pad )
{
	var len = lnk.childNodes.length;
	if (len < 1) return true;
	var sub = lnk;
	while (len > 0)
	{	
		len--;
		var aux = lnk.childNodes[len];
		if (aux.tagName != undefined) sub = aux;
	}
	var ip = weGetImgPos( sub );
	var ix = ip.left;
	var iy = ip.top;
	var iw = sub.offsetWidth;
	var ih = sub.offsetHeight;
	var img = null;
	var box = document.getElementById( 'wePopupImageBox' );
	if (null == box)
	{
		img = document.createElement('span');
		if (null == img) return true;
		img.innerHTML = '<a href="#" onclick="return false;"><div id="wePopupImageBox" onclick="this.style.visibility=\'hidden\';" style="position:absolute;left:0px; top:0px; background-color:'+bgc+';border:'+bds+' '+bdc+';z-index:99999; visibility:hidden;"><img id="wePopupImageImg" border="0" src="'+lnk.href+'" style="width:120px;height:160px;margin:'+pad+'px;" /></div></a>';
		document.body.appendChild(img);
		box = document.getElementById( 'wePopupImageBox' );
		if (null == box) return true;
	}
	if(box.style.visibility == 'hidden')
	{
		img = document.getElementById( 'wePopupImageImg' );
		img.src = lnk.href;
		img.style.width  = dvw+'px';
		img.style.height = dvh+'px';
		ix -= ((dvw >> 1)-(iw >> 1));
		iy -= ((dvh >> 1)-(ih >> 1));
		if (ix < 0) ix=0
		if (iy < 0) iy=0
		box.style.left = ix+'px';
		box.style.top  = iy+'px';
		box.style.visibility = 'visible';
	}else box.style.visibility = 'hidden';
	return false;
}




/*--- EndOfFile ---*/
