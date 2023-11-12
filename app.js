"use strict";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
// First, declare variables
// var window = window;
// var document = document;
// var slidesContainer = document.querySelector("main");
// var slides = Array.from(document.querySelectorAll(".panel"));
// var currentSlide = slides[0];
// var nav = document.querySelector("nav");

// var isAnimating = false;
// var pageHeight = window.innerHeight;

// var keyCodes = {
//   UP: 38,
//   DOWN: 40,
// };

// // Going to the first slide
// goToSlide(currentSlide);

// // Adding event listeners
// window.addEventListener("resize", onResize);
// document.addEventListener("keydown", onKeyDown);

// // Internal functions

// function onKeyDown(event) {
//   var pressedKey = event.keyCode;

//   if (pressedKey === keyCodes.UP) {
//     goToPrevSlide();
//     event.preventDefault();
//   } else if (pressedKey === keyCodes.DOWN) {
//     goToNextSlide();
//     event.preventDefault();
//   }
// }

// function goToPrevSlide() {
//   var prevSlide = slides[slides.indexOf(currentSlide) - 1];
//   if (prevSlide) {
//     goToSlide(prevSlide);
//   }
// }

// function goToNextSlide() {
//   var nextSlide = slides[slides.indexOf(currentSlide) + 1];
//   if (nextSlide) {
//     goToSlide(nextSlide);
//   }
// }

// function goToSlide(slide) {
//   if (!isAnimating && slide) {
//     isAnimating = true;
//     currentSlide = slide;

//     gsap.to(window, {
//       scrollTo: { y: pageHeight * slides.indexOf(currentSlide) },
//       duration: 1,
//       onComplete: onSlideChangeEnd,
//     });

//     if (currentSlide.id === "hero") {
//       // Add ScrollTrigger to stick and scale the nav on scroll
//       ScrollTrigger.create({
//         start: "top top",
//         endTrigger: "main",
//         end: "bottom top", // Adjust this based on when you want the scaling to stop
//         onUpdate: (self) => {
//           // Scale the nav based on scroll progress
//           gsap.to(nav, {
//             scale: 1 - self.progress * 0.4, // Adjust the scale factor as needed
//           });
//         },
//       });
//     } else {
//       // If not on the hero, reset the scale to 1
//       gsap.to(nav, { scale: 1 });
//     }
//   }
// }

// function onSlideChangeEnd() {
//   isAnimating = false;
// }

// function onResize() {
//   var newPageHeight = window.innerHeight;

//   if (pageHeight !== newPageHeight) {
//     pageHeight = newPageHeight;

//     gsap.set([slidesContainer, slides], { height: pageHeight });
//     gsap.to(window, {
//       scrollTo: { y: pageHeight * slides.indexOf(currentSlide) },
//     });
//   }
// }
// Animate Snow
// const maxShapes = 20;
// const sections = document.querySelectorAll(".panel");

// sections.forEach((section, index) => {
//   const shapesCount = Math.ceil(maxShapes / Math.pow(2, index)); // Decrease the number of shapes in each section

//   const shapes = createAndPositionShapes(shapesCount);

//   shapes.forEach((shape) => {
//     section.appendChild(shape);
//     floatVertically(shape);
//   });
// });

// function createAndPositionShapes(count) {
//   const baseShapes = document.querySelectorAll(".snow");
//   const shapes = [];

//   for (let i = 0; i < count; i++) {
//     const baseShape = getRandomFromArray(baseShapes);
//     const shape = baseShape.cloneNode(true);
//     shape.classList.remove("base");

//     gsap.set(shape, {
//       x: random(0, window.innerWidth),
//       y: random(0, window.innerHeight),
//     });

//     shapes.push(shape);
//   }

//   return shapes;
// }

// function floatVertically(target) {
//   gsap.to(target, random(4, 8), {
//     y: "+=20",
//     yoyo: true,
//     repeat: -1,
//     ease: "power1.inOut",
//   });
// }

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// function getRandomFromArray(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// console.clear();

// const totalShapes = 60; // Total number of shapes for all sections
// const baseShapes = document.querySelectorAll(".snow.base");
// const sections = document.querySelectorAll(".panel");

// const shapesPerSection = distributeShapes(totalShapes, sections.length);

// sections.forEach((section, index) => {
//   const shapesInThisSection = shapesPerSection[index];
//   const shapes = createAndPositionShapes(
//     baseShapes,
//     shapesInThisSection,
//     section
//   );

//   shapes.forEach((shape) => {
//     section.appendChild(shape);
//     floatVertically(shape);
//   });
// });

// function distributeShapes(total, numSections) {
//   const shapesPerSection = [];
//   let remainingShapes = total;

//   for (let i = 0; i < numSections - 1; i++) {
//     const shapesInThisSection = Math.ceil(remainingShapes / (numSections - i));
//     shapesPerSection.push(shapesInThisSection);
//     remainingShapes -= shapesInThisSection;
//   }

//   shapesPerSection.push(remainingShapes);

//   return shapesPerSection;
// }

// function createAndPositionShapes(baseShapes, count, section) {
//   const shapes = [];

//   for (let i = 0; i < count; i++) {
//     const baseShape = getRandomFromArray(baseShapes);
//     const shape = baseShape.cloneNode(true);
//     shape.classList.remove("base");

//     const sectionRect = section.getBoundingClientRect();

//     gsap.set(shape, {
//       x: random(sectionRect.left, sectionRect.right - shape.clientWidth),
//       y: random(sectionRect.top, sectionRect.bottom - shape.clientHeight),
//     });

//     shapes.push(shape);
//   }

//   return shapes;
// }

// function floatVertically(target) {
//   gsap.to(target, random(4, 8), {
//     y: "+=20",
//     yoyo: true,
//     repeat: -1,
//     ease: "power1.inOut",
//   });
// }

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// function getRandomFromArray(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

console.clear();

const totalShapes = 20; // Total number of shapes for all sections
const baseShapes = document.querySelectorAll(".snow.base");
const sections = document.querySelectorAll(".panel");

const shapesPerSection = distributeShapes(totalShapes, sections.length);

sections.forEach((section, index) => {
  const shapesInThisSection = shapesPerSection[index];
  const shapes = createAndPositionShapes(
    baseShapes,
    shapesInThisSection,
    section
  );

  shapes.forEach((shape) => {
    section.appendChild(shape);
    floatVertically(shape, section.clientHeight);
  });
});

function distributeShapes(total, numSections) {
  const shapesPerSection = [];
  let remainingShapes = total;

  for (let i = 0; i < numSections - 1; i++) {
    const shapesInThisSection = Math.ceil(remainingShapes / (numSections - i));
    shapesPerSection.push(shapesInThisSection);
    remainingShapes -= shapesInThisSection;
  }

  shapesPerSection.push(remainingShapes);

  return shapesPerSection;
}

// function createAndPositionShapes(baseShapes, count, section) {
//   const shapes = [];

//   for (let i = 0; i < count; i++) {
//     const baseShape = getRandomFromArray(baseShapes);
//     const shape = baseShape.cloneNode(true);
//     shape.classList.remove("base");

//     const maxX = window.innerWidth - shape.clientWidth;
//     const maxY = section.clientHeight - shape.clientHeight;

//     gsap.set(shape, {
//       x: random(0, maxX - 50),
//       y: random(0, maxY - 50),
//     });

//     shapes.push(shape);
//   }

//   return shapes;
// }

function createAndPositionShapes(baseShapes, count, section) {
  const shapes = [];

  const isColliding = (shape, otherShapes) => {
    for (const otherShape of otherShapes) {
      if (
        shape !== otherShape &&
        shape.getBoundingClientRect().left <
          otherShape.getBoundingClientRect().right &&
        shape.getBoundingClientRect().right >
          otherShape.getBoundingClientRect().left &&
        shape.getBoundingClientRect().top <
          otherShape.getBoundingClientRect().bottom &&
        shape.getBoundingClientRect().bottom >
          otherShape.getBoundingClientRect().top
      ) {
        return true; // Shapes are colliding
      }
    }
    return false; // Shapes are not colliding
  };

  for (let i = 0; i < count; i++) {
    const baseShape = getRandomFromArray(baseShapes);
    const shape = baseShape.cloneNode(true);
    shape.classList.remove("base");

    const maxX = window.innerWidth - shape.clientWidth;
    const maxY = section.clientHeight - shape.clientHeight;

    let collisionDetected = false;
    let attemptCount = 0;

    do {
      // Try to position the shape within section boundaries
      gsap.set(shape, {
        x: random(0, maxX - 50),
        y: random(0, maxY - 50),
      });

      // Check for collision with existing shapes in the section
      collisionDetected = isColliding(shape, shapes);

      // Limit the number of attempts to prevent an infinite loop
      attemptCount++;
    } while (collisionDetected && attemptCount < 50); // Adjust the attempt count as needed

    // If collision persists after several attempts, skip adding the shape
    if (!collisionDetected) {
      shapes.push(shape);
    }
  }

  return shapes;
}

function floatVertically(target, sectionHeight) {
  gsap.to(target, {
    duration: random(4, 8),
    y: `+=${sectionHeight * 0.1}`,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
