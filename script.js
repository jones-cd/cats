
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var apiRequest = new XMLHttpRequest();

apiRequest.open('GET', 'https://api.thecatapi.com/v1/breeds', true);

apiRequest.setRequestHeader("x-api-key", "0d198684-034a-4ef5-ba22-3facfe6e812a");



apiRequest.onload = function() {
	var data = JSON.parse(this.response);

	if (apiRequest.status >= 200 && apiRequest.status < 400) {
	  		data.forEach(cat => {
	    	const card = document.createElement('div');
	  		card.setAttribute('class', 'card');


	  		// Create an h1 and set the text content to the cat's breed name
	  		const h1 = document.createElement('h1');
	  		h1.textContent = cat.name;

	  		// Create a p and set the text content to the cat's temperament
			const p = document.createElement('p');
			p.textContent = cat.description;

			// Create a p and set the text content to the cat's origin
			const p2 = document.createElement('p');
			p2.setAttribute('class', 'origin');
			p2.textContent = cat.origin;

			console.log(cat.length);

			//write to the DOM
	  		container.appendChild(card);
	  		card.appendChild(h1);
	  		card.appendChild(p);
	  		card.appendChild(p2);

  	});

	} else {
  		console.log('error');
		}
	};

	
apiRequest.send();










//Your API Key: 0d198684-034a-4ef5-ba22-3facfe6e812a
//Just use it as the 'x-api-key' header when making requests to the API
//Your unique User ID: papfai

