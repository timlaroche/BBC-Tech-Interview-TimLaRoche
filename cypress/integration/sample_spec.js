describe('Reading all the articles', function(){
	it('Visits my website and reads all 5 articles', function(){
		//Go to our webpage and click the button to start the reading process. i.e. View the first article.
		cy.visit("http://localhost:3000/")
		cy.get('button').click()

		// When react router is implented, check that the route has changed
		// Implement in this line when possible

		//Check that the first article has all the elements as according to 'article-1.json'
		cy.get('#application p').should('have.length', 3)
		cy.get('#application img').should('have.length', 1)
		cy.get('#application ul').should('have.length', 1)
		cy.get('#application li').should('have.length', 2)
		//Have to use contain as 'semantic-ui-react' puts ** h2contents ** so eqls does not work without appending these **
		//becomes easier to read the test without this
		cy.get('#application h2').should('contain', "Lorem ipsum dolor sit amet, consectetur adipiscing elit")
		cy.get('#application h1').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
		cy.get('button').click()

		//Check that the second article has all the elements as according to 'article-2.json'
		cy.get("#application h1").should('contain', "Praesent bibendum nec velit a fringilla. Nulla facilisi")
		cy.get('#application h2').should('contain', "Nam eu varius magna, vel molestie diam")
		cy.get('#application img').should('have.length', 3)
		cy.get('#application p').should('have.length', 4)
		cy.get('button').click()

		//Check that the third article has all the elements as according to 'article-3.json'
		cy.get("#application h1").should('contain', "Vestibulum posuere orci ullamcorper nisi porta, sit amet tempus nibh porta")
		cy.get('#application h2').should('contain', "Donec est neque, vulputate vitae magna non, aliquam semper lectus")
		cy.get('#application p').should('have.length', 8)
		cy.get('button').click()

		//Check that the fourth article has all the elements as according to 'article-4.json'
		cy.get("#application h1").should('contain', "Maecenas venenatis lorem ut erat dictum, sed varius est porta")
		cy.get('#application h2').should('contain', "Maecenas venenatis lorem ut erat dictum, sed varius est porta")
		cy.get('#application ul').should('have.length', 2)
		cy.get('#application li').should('have.length', 6)
		cy.get('#application p').should('have.length', 3)
		cy.get('button').click()

		//Check that the fifth article has all the elements as according to 'article-5.json'
		cy.get("#application h1").should('contain', "Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu")
		cy.get('#application h2').should('contain', "Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu")
		cy.get('#application img').should('have.length', 2)
		cy.get('#application p').should('have.length', 1)
		cy.get('button').click()



	});
});