// exemple d'utilisation d'un sélecteur CSS dans du code JS
document.querySelectorAll('a[href*=".fr"]').forEach((item, list, index) => {
    console.log(item.href);
})
