const loading = document.querySelector('.loading');
const tombol = document.querySelector('.tombol');
tombol.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (loading.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    loading.classList.toggle(satu);
    // setTimeout(function () {
    //     this.classList.toggle('caption');
    //     // console.log(this);
    // }, 600);
    setTimeout(() => {
        loading.classList.toggle(dua);
    }, 1000);
});