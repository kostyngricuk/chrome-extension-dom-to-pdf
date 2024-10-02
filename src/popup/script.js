document.getElementById("downloadAsPDF").addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    function printTitle() {
      const dom = document;
      const targetElement = dom.querySelector('.domToPdf');

      if (!targetElement) {
        console.log('Element ".domToPdf" is not found!')
        return;
      }

      if (typeof html2pdf === 'undefined') {
        console.log('Library "html2pdf" is not found!');
        return;
      }
      html2pdf(targetElement);
    };

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: printTitle,
    }).then(() => console.log('Injected a function!'));
  });
});