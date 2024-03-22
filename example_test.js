Feature('Example Test Suite');

Scenario('my first test', ({ I, examplePage }) => {
    I.amOnPage("https://example.com/")
    //I.wait(2)
    //I.seeElement("h1")
    examplePage.assertTitle()
})




