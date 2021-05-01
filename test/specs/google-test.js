describe('Google wdio test', () => {
  it('', () => {
    console.log('Open Google page.');
    browser.url('https://www.google.com/');
    
    console.log('Select search and write the text.');
    let searchBoxElement = $('[name=\'q\']');
    searchBoxElement.setValue("Wikipedia\n");

    let firstResult = $('#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a');
    let linkFirstResult = firstResult.getAttribute('href');
    console.log('Link from first result: ' + linkFirstResult);

    console.log('Open Wikipedia.');
    firstResult.click();
  
    expect(browser.getUrl()).toBe('https://es.wikipedia.org/wiki/Wikipedia:Portada');
  });
});
