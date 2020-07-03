// RGB(0,0,0) && RGB(255,255,255)
document.addEventListener('mousemove', function(event) {
        // console.log(event);
        const windowRed = window.innerWidth;
        const windowBlue = window.innerHeight;
        const rSide = event.pageX;
        const bSide = event.pageY;
        const redNum = Math.floor((rSide / windowRed) * 256);
        const blueNum = Math.floor((bSide / windowBlue) * 255);
        // console.log(`windoeWidth = ${windowRed} and Pagex = ${rSide}`);
        // console.log(redNum);
        document.body.style.backgroundColor = `rgb(${redNum}, 0, ${blueNum})`;
        // console.log(`rgb(${redNum}, 0, ${blueNum})`);
});
