
     document.getElementById('btn-volver').addEventListener('click', function (e) {
        e.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });