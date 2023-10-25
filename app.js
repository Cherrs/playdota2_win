var tl = gsap.timeline();

tl.to(".name", { x: 100, duration: 1, ease: "power3.out" });
// gsap.to("#photo", { x: 200, duration: 0.8, ease: "power3.out" });

gsap.to(".first", {
    backgroundColor: "aliceblue", stagger: 1, onComplete: () => {
        document.getElementById("name").style.color = "#0052ba";
        document.getElementById("photo").style.visibility = "visible";
    }
});
