function seoAudit() {

	var url = document.getElementById('urlToAudit').value;

	// console.log the name and value of all meta tags
	let metaTags = document.querySelectorAll('meta');
	for(let i = 0; i < metaTags.length; i ++) {
		console.log('Meta Tag Name: ' + metaTags[i].name + ' | Meta Tag Value: ' + metaTags[i].content);



		// Append to DOM
		let metaTag = document.createElement('p');
		metaTag.innerHTML = 'Meta Tag Name: ' + metaTags[i].name + ' | Meta Tag Value: ' + metaTags[i].content;
		document.getElementById('results').appendChild(metaTag);




	}

	// console.log the innerText value of the title tag
	console.log('Title Tag Value: ' + document.title);

	// console.log the schema markup
	let schemaMarkup = document.querySelector('script[type="application/ld+json"]');
	if (schemaMarkup.innerText.includes('schema.org')) {
		console.log('Schema Markup: ' + schemaMarkup.innerText);
	}

	// console.log the list of images with no title attribute
	let noImgAlt = document.querySelectorAll('img:not([alt])');
	let emptyImgAlt = document.querySelectorAll('img[alt=""]');
	let missingImgAlt = noImgAlt.concat(emptyImgAlt);
	for(let i = 0; i < missingImgAlt.length; i ++) {
		console.log('This image is missing an alt tag: ' + missingImgAlt[i].src);
	}

	// console.log the list of images with no title attribute
	let noImgTitle = document.querySelectorAll('img:not([title])');
	let emptyImgTitle = document.querySelectorAll('img[title=""]');
	let missingImgTitle = noImgTitle.concat(emptyImgTitle);
	for(let i = 0; i < missingImgTitle.length; i ++) {
		console.log('This image is missing an alt tag: ' + missingImgTitle[i].src);
	}

	// console.log the list of a tags with no title attribute
	let noATitle = document.querySelectorAll('a:not([title])');
	let emptyATitle = document.querySelectorAll('a[title=""]');
	let missingATitle = noATitle.concat(emptyATitle);
	for(let i = 0; i < missingATitle.length; i ++) {
		console.log('This link is missing a title tag: ' + missingATitle[i].href);
	}

	// console.log the list of a tags with no rel attribute
	let noARel = document.querySelectorAll('a:not([rel])');
	let emptyARel = document.querySelectorAll('a[rel=""]');
	let missingARel = noARel.concat(emptyARel);
	for(let i = 0; i < missingARel.length; i ++) {
		console.log('This link is missing a rel attribute: ' + missingARel[i].href);
	}

	// console.log the list of a tags with no target attribute
	let noATarget = document.querySelectorAll('a:not([target])');
	let emptyATarget = document.querySelectorAll('a[target=""]');
	let missingATarget = noATarget.concat(emptyATarget);
	for(let i = 0; i < missingATarget.length; i ++) {
		console.log('This link is missing a target attribute: ' + missingATarget[i].href);
	}

	// console.log the list of elements inside the body tag with no id attribute or if the id attribute is empty
	let emptyId = document.querySelectorAll('body *[id=""]');
	let noId = document.querySelectorAll('body *:not([id])');
	let missingId = noId.concat(emptyId);
	for(let i = 0; i < missingId.length; i ++) {
		console.log('This element is missing an id attribute: ' + missingId[i].tagName);
	}
}