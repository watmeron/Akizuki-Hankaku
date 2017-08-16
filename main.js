
function replaceZen2Han (n) {
  if (n.nodeType === Node.TEXT_NODE) {
    if (n.parentNode &&
        n.parentNode.nodeName === 'TEXTAREA') {
      return;
    }

    let content = n.textContent;

		content = content.replace("　", " ");
		content = content.replace(/[Ａ-Ｚ－／ａ-ｚ０-９]/g, function(s) {
    	return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
		});

    n.textContent = content;
  }
  else {
    for (let i = 0; i < n.childNodes.length; i++) {
      replaceZen2Han(n.childNodes[i]);
    }    
  }
}

replaceZen2Han(document.body);