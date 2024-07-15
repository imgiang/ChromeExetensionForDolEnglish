const init = function(){
    // Create the floating button
    const floatingButton = document.createElement('div');
    floatingButton.id = 'floatingButton';
    floatingButton.textContent = 'v/';

    // Add the floating button to the body
    document.body.appendChild(floatingButton);

    // Add event listener to the floating button
    floatingButton.addEventListener('click', function() {
        var t ="";
        const nodeList = document.querySelectorAll("div.DoDictationAudioAfterLogin__Body-sc-1ufhija-3");

        // nodeList[0].children

        alert('Floating button clicked!'+ nodeList[0].children.length + " !");
    });

    const floatingButton2 = document.createElement('div');
    floatingButton2.id = 'floatingButton2';
    floatingButton2.textContent = '->';

    // Add the floating button to the body
    document.body.appendChild(floatingButton2);

    // Add event listener to the floating button
    floatingButton2.addEventListener('click', function() {
        alert('Floating button clicked!');
    });
}
init();