import { useEffect, useRef } from "react";

const TrailCursor = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    document.body.style.cursor = "none";

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouse.current.x += (target.current.x - mouse.current.x) * 0.2;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.2;

      trail.current.push({ x: mouse.current.x, y: mouse.current.y });
      if (trail.current.length > 90) trail.current.shift(); // افزایش به 90

      // دنباله با رنگ زرد روشن (#ffee00) و ۳۰٪ آخر دنباله سفید رنگ
      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i];
        const alpha = i / trail.current.length;

        let fillColor;
        if (i >= trail.current.length * 0.7) {
          // 30% آخر دنباله سفید رنگ
          fillColor = `rgba(255, 255, 255, ${alpha * 0.7})`;
        } else {
          // بقیه زرد روشن (#ffee00)
          fillColor = `rgba(255, 238, 0, ${alpha * 0.7})`;
        }

        ctx.beginPath();
        ctx.fillStyle = fillColor;
        ctx.arc(p.x, p.y, 5 * alpha + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // سر آیکون زرد روشن (#ffee00) با سایه کمرنگ هم‌رنگ خودش
      ctx.shadowColor = "rgba(255, 238, 0, 0.7)";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 238, 0, 1)";
      ctx.arc(mouse.current.x, mouse.current.y, 7, 0, Math.PI * 2);
      ctx.fill();

      // پاک کردن سایه برای بقیه موارد
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default TrailCursor;
