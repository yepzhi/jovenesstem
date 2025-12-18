document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const canvas = document.getElementById('intro-canvas');
    const ctx = canvas.getContext('2d');
    const gradientZoom = document.querySelector('.intro-gradient-zoom');

    // Configuration
    let width = window.innerWidth;
    let height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    // Star properties
    const stars = [];
    const numStars = 800;
    let speed = 2;
    let acceleration = 0.05;
    let maxSpeed = 50;
    let isAccelerating = false;
    let animationId;

    // Resize handling
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    // Initialize Canvas
    canvas.width = width;
    canvas.height = height;

    // Star Class
    class Star {
        constructor() {
            this.x = Math.random() * width - centerX;
            this.y = Math.random() * height - centerY;
            this.z = Math.random() * width; // depth
            this.pz = this.z; // previous z
        }

        update() {
            this.z -= speed;

            if (this.z < 1) {
                this.reset();
            }
        }

        reset() {
            this.x = Math.random() * width - centerX;
            this.y = Math.random() * height - centerY;
            this.z = width;
            this.pz = this.z;
        }

        draw() {
            const sx = (this.x / this.z) * width + centerX;
            const sy = (this.y / this.z) * height + centerY;

            const r = (width / this.z) * 0.1; // size based on depth logic

            // Draw star path (streak effect)
            const px = (this.x / this.pz) * width + centerX;
            const py = (this.y / this.pz) * height + centerY;

            this.pz = this.z;

            // Only draw if within screen bounds
            if (sx > 0 && sx < width && sy > 0 && sy < height) {
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.lineWidth = r > 5 ? 5 : r; // Cap line width

                // Color shift based on speed
                if (speed > 20) {
                    ctx.strokeStyle = `rgba(180, 200, 255, ${1 - this.z / width})`;
                } else {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - this.z / width})`;
                }

                ctx.stroke();
            }
        }
    }

    // Populate stars
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }

    // Animation Loop
    function animate() {
        // Clear with fade trail (optional, but pure black is cleaner for stars)
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        // Update Speed
        if (isAccelerating) {
            speed += acceleration;
            acceleration += 0.01; // Exponential acceleration
        }

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        // Loop
        if (speed < maxSpeed) {
            animationId = requestAnimationFrame(animate);
        } else {
            // End Sequence reached
            triggerTransition();
        }
    }

    function triggerTransition() {
        // Stop star animation loop eventually, or let it streak out
        // Trigger the gradient zoom
        gradientZoom.classList.add('animate-zoom-in');

        // Final fade out sequence
        setTimeout(() => {
            overlay.classList.add('intro-hidden');
            // Stop animation to save resources
            cancelAnimationFrame(animationId);
        }, 1200); // Wait for zoom effect to peak
    }

    // Start Sequence
    setTimeout(() => {
        isAccelerating = true;
    }, 1000); // Wait 1 second before accelerating

    animate();
});
