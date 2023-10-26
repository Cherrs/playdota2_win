var tl_1 = gsap.timeline();

tl_1.to(".name", {
    x: 100, duration: 0.5, ease: "power3.out", onComplete: () => {
        document.getElementsByTagName("body")[0].style.backgroundColor = "aliceblue";
        document.getElementById("name").style.color = "#0052ba";
        document.getElementById("photo").style.visibility = "visible";
    }
});
tl_1.to(".photo", { duration: 0.8 });
// tl_1.to(".photo", { transform: "scale(2)", duration: 0.2 });