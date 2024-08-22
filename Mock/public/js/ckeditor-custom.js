document.querySelectorAll('.ck-editor')?.forEach(x => x.remove());
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });