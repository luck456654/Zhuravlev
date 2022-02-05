var tl=gsap.timeline();
tl.from(".hero__title",{y:300,duration:1})
tl.from(".hero__descr",{opacity:0,duration:1})
tl.from(".photo1",{scale: 0})
tl.from(".photo2",{scale: 0})
tl.from(".photo3",{scale: 0})
tl.from(".photos__author",{opacity:0,duration:1})
tl.to(".menu",{opacity:1})


gsap.from(".hero__btn",{y:300,duration:1})










