const counterSpeed = 200;

document.querySelectorAll('#statCouter').forEach(statCouter => {
    const counterNum = +statCouter.getAttribute('countTo');

    const update = setInterval(()=> {
        const contentUpdate = +statCouter.innerText;
        const increase = counterNum / counterSpeed;

        contentUpdate < counterNum ?
        statCouter.innerHTML = Math.ceil(contentUpdate + increase) :
       
        clearInterval(contentUpdate);

    }, 1);
});
