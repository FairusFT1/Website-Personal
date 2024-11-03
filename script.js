const searchInput = document.querySelector('.inputSearch');
        const recipeBoxes = document.querySelectorAll('.box');

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();

            recipeBoxes.forEach(box => {
                const img = box.querySelector('.boxDonat');
                const imgName = img.src.split('/').pop().split('.')[0].toLowerCase();

                if (imgName.includes(searchTerm)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });