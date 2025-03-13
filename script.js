const items = document.querySelectorAll('.testimonial-item');
let current = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

showItem(current);