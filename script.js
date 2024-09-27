let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    let slide = document.querySelector('.slide')
    let fullscreenOverlay = document.querySelector('.fullscreen-overlay')
    let fullscreenImage = document.querySelector('.fullscreen-image')
    let closeButton = document.querySelector('.close-button')

    function moveSlide(direction) {
        let items = document.querySelectorAll('.item')
        if (direction === 'next') {
            slide.appendChild(items[0])
        } else if (direction === 'prev') {
            slide.prepend(items[items.length - 1])
        }
        updateSlideContent()
    }

    function updateSlideContent() {
        let items = document.querySelectorAll('.item')
        items.forEach((item, index) => {
            if (index === 1) {
                item.querySelector('.content').style.display = 'block'
            } else {
                let content = item.querySelector('.content')
                if (content) content.style.display = 'none'
            }
        })
    }

    next.addEventListener('click', function(){
        moveSlide('next')
    })

    prev.addEventListener('click', function(){
        moveSlide('prev')
    })

    // Show full resolution image on click
    slide.addEventListener('click', function(e) {
        if (e.target.classList.contains('item')) {
            let imageUrl = e.target.style.backgroundImage.slice(4, -1).replace(/"/g, "")
            fullscreenImage.src = imageUrl
            fullscreenOverlay.style.display = 'flex'
        }
    })

    // Close fullscreen image
    closeButton.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none'
    })

    // Handle arrow key presses
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            moveSlide('next')
        } else if (e.key === 'ArrowLeft') {
            moveSlide('prev')
        }
    })

    // Initial setup
    updateSlideContent()

