var v1 = [];
var v1Input = [];
var v2 = [];
const init = function () {
    // Create the floating button
    const floatingButton = document.createElement('div');
    floatingButton.id = 'floatingButton';
    floatingButton.textContent = 'v/';

    // Add the floating button to the body
    document.body.appendChild(floatingButton);

    // Add event listener to the floating button
    floatingButton.addEventListener('click', function () {
        v1 = [];
        v2 = [];
        v1Input = [];
        const normalize = (str) => str.replace(/['"]/g, '').replace(/’/g, "'").trim();
        
        const nodeList = document.querySelectorAll("div.DoDictationAudioAfterLogin__Body-sc-1ufhija-3");
        nodeList.forEach(element => {
            const children = element.children;

            // Loop through each child element
            for (let child of children) {
                const inputs = child.querySelectorAll('input');
                const spans = child.querySelectorAll('span');

                inputs.forEach(input => {
                    v1Input.push(input);
                    v1.push(normalize(input.value));
                });
                spans.forEach(span => {
                    v1Input.push(span);
                    v1.push(normalize(span.innerHTML));
                });
            }
        });
        v1 = v1.filter(Boolean);

        // get v2
        const nodeList2 = document.querySelectorAll(".SectionViewScriptDetail__Content-sc-uknfvf-2.jXPNsu");
        const wordList = [];
        for (let child of nodeList2[0].children) {
            const spans = child.querySelectorAll('span');
            spans.forEach(span => {
                wordList.push(span.innerHTML);
            });
        }
        v2 = normalize(wordList[1]).split(/([.,?!])/).filter(Boolean);
        v2 = v2.flatMap(item => item.split(/\s+/)).filter(Boolean);
        console.log(v1)
        console.log(v2)
        // compare two array
        for (let i = 0; i < v2.length; i++) {
            v1Input[i].classList.remove('InCorrectColor');
            v1Input[i].classList.remove('CorrectColor');
            if ((v1[i].toLowerCase()) === (v2[i].toLowerCase())) {
                v1Input[i].classList.add('CorrectColor');
            } else {
                v1Input[i].classList.add('InCorrectColor');
            }
        }
    });

    const floatingButton2 = document.createElement('div');
    floatingButton2.id = 'floatingButton2';
    floatingButton2.textContent = '->';

    // Add the floating button to the body
    document.body.appendChild(floatingButton2);

    // Add event listener to the floating button
    floatingButton2.addEventListener('click', function () {
        alert('Floating button clicked!');
    });
}
init();