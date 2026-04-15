let target = document.getElementById('target');

target.onclick = function (ev) {
    console.log('click');
    console.log(ev);
}

// target.onmousemove = function (ev) {
//     console.log(ev.clientX, ev.clientY);
//     let r=ev.clientX;
//     let g=ev.clientY;
//     let b=ev.clientX;
//     this.styles.background=`rgb(${r},${g},${b})`;
// }

