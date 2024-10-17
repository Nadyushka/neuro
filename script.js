const cookiesElement = document.querySelector('.introduction__cookies')
const cookiesButton = document.querySelector('.introduction__cookies-button')

const acceptCookies = () => {
    cookiesElement.classList.add('introduction__cookies_hidden')
}

cookiesButton.addEventListener('click', acceptCookies)
