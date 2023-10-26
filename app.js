var tl_1 = gsap.timeline();

tl_1.to(".name", {
    x: 100, duration: 0.5, ease: "power3.out", onComplete: () => {
        document.getElementsByTagName("body")[0].style.backgroundColor = "aliceblue";
        document.getElementById("name").style.color = "#0052ba";
        document.getElementById("photo").style.visibility = "visible";
    }
});
tl_1.add(gsap.delayedCall(0.5, () => {
    document.getElementById("first").style.display = "none";
    document.getElementById("two").style.display = "flex";

    // document.getElementById("photo").style.scale = 4;
}));
tl_1.to("#two img", { scale: 1.5, duration: 1 });