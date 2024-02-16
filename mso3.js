    // تعريف متغيرات
    var seconds = 10; // عدد الثواني
    var timer = document.getElementById('timer');
var dur = document.getElementById('ItsItDone');
    // دالة لتحديث العداد كل ثانية
    function updateTimer() {
        seconds--;
        timer.textContent = seconds;

        if (seconds <= 0) {
            // عندما يصل العداد إلى صفر، قم بعرض الروابط
            dur.style.display = 'none'; // إخفاء العداد
            showLinks();
        } else {
            setTimeout(updateTimer, 1000); // تحديث العداد كل ثانية
        }
    }

    // دالة لعرض الروابط
    function showLinks() {
        var links = document.querySelectorAll('ul');
        for (var i = 0; i < links.length; i++) {
            links[i].style.display = 'block'; // إظهار الروابط
        }
    }

    // بدء العداد
    updateTimer();

  var rotatingElement = document.getElementById('rotating-element');
    var currentRotation = -45; // الزاوية الحالية
    var targetRotation = -225; // الزاوية المستهدفة
    var duration = 8.8; // مدة الانتقال بالثواني

    var startTime = null;

    function animateRotation(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = (timestamp - startTime) / (duration * 1000); // تقدر النسبة المئوية للتقدم
        if (progress > 1) progress = 1; // للتأكد من أنها لا تتجاوز 1

        // حساب الزاوية الحالية بناءً على التقدم
        var currentRotationDeg = currentRotation + (targetRotation - currentRotation) * progress;

        // تحديث العنصر بالزاوية الجديدة
        rotatingElement.style.transform = 'rotate(' + currentRotationDeg + 'deg)';

        if (progress < 1) {
            requestAnimationFrame(animateRotation);
        }
    }

    // بدء الحركة
    requestAnimationFrame(animateRotation);
