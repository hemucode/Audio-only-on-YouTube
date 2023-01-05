function A3bfd(A3fda16, A3bfd7f) {
    const Afaf524 = A3fda();
    return A3bfd = function (A960949, A2d6369) {
        A960949 = A960949 - 0;
        let A18e956 = Afaf524[A960949];
        return A18e956;
    }, A3bfd(A3fda16, A3bfd7f);
}
function A3fda() {
    const A2721db = [
        'currentScript',
        'dataset',
        'url',
        'querySelectorAll',
        'video',
        'src',
        'yt-navigate-finish',
        'pause',
        'location',
        'href',
        'split',
        'indexOf',
        '/0.jpg',
        'style',
        'url('
    ];
    A3fda = function () {
        return A2721db;
    };
    return A3fda();
}
{
    const url = document[A3bfd(0)][A3bfd(1)][A3bfd(2)], video = window !== window['top'] ? document['querySelector']('video') : [...document[A3bfd(3)](A3bfd(4))]['filter'](A1dafc2 => A1dafc2['offsetHeight'])[0];
    if (url && video) {
        if (url !== video[A3bfd(5)]) {
            video['removeAttribute'](A3bfd(6));
            try {
                video[A3bfd(7)](), video[A3bfd(5)] = url, video['currentTime'] = 0, video['play']();
                if (document[A3bfd(8)]['href']) {
                    let href = document[A3bfd(8)][A3bfd(9)][A3bfd(10)]('v=')[1] || document['location'][A3bfd(9)]['split']('/embed/')[1];
                    if (href) {
                        let index = href[A3bfd(11)]('&'), id = index !== -1 ? href['substring'](0, index) : href, image = 'https://img.youtube.com/vi/' + id + A3bfd(12);
                        video[A3bfd(13)]['background'] = A3bfd(14) + image + ') center center / 100% no-repeat transparent';
                    }
                }
            } catch (A3d165b) {
            }
        }
    }
}