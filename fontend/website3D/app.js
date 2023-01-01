//3D Scroll

let zSpacing = -1000,
    lastPos = zSpacing/5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVal = []

window.onscroll = function(){
    let top = document.documentElement.scrollTop,
        delta = lastPos - top
    
    lastPos = top

    frames.forEach(function(n, i){
        zVal.push((i * zSpacing) + zSpacing)
        zVal[i] += delta * -5.5;
        let frame =  frames[i],
            transform = `translateZ(${zVal[i]}px)`
            opacity = zVal[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute(`style`, `transform: ${transform}; opacity: ${opacity}`)
    });
}

window.scrollTo(0, 1)

