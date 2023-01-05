/*!
 *  By @Codehemu - https://github.com/hemucode/nonstop-youtube/license ( JS: MIT License)
 *  License - https://github.com/hemucode/nonstop-youtube/license ( CSS: MIT License)
 */
function A2afa(A2a9373, A2afaa6) {
    var A117216 = A2a93();
    return A2afa = function (A6ab157, A48e25f) {
        A6ab157 = A6ab157 - 0;
        var A51670e = A117216[A6ab157];
        return A51670e;
    }, A2afa(A2a9373, A2afaa6);
}
var background = (function () {
        var A29689e = {};
        return chrome['runtime'][A2afa(0)]['addListener'](function (A195bf0) {
            for (var A2e8fcd in A29689e) {
                A29689e[A2e8fcd] && typeof A29689e[A2e8fcd] === A2afa(1) && (A195bf0[A2afa(2)] === A2afa(3) && (A195bf0[A2afa(4)] === A2e8fcd && A29689e[A2e8fcd](A195bf0['data'])));
            }
        }), {
            'receive': function (Ad55307, A3f48e7) {
                A29689e[Ad55307] = A3f48e7;
            },
            'send': function (A301cba, A2a9c58) {
                chrome[A2afa(5)][A2afa(6)]({
                    'method': A301cba,
                    'data': A2a9c58,
                    'path': A2afa(7)
                });
            }
        };
    }()), config = {
        'url': '',
        'id': 'audio-on-youtube-script',
        'listener': function () {
            let A248d77 = config['find'][A2afa(8)]();
            A248d77 && (A248d77['setAttribute']('yt-navigate-finish', ''), config['inject']());
        },
        'info': function (A19d71e) {
            A19d71e && (A19d71e[A2afa(9)] && (config[A2afa(9)] = A19d71e['url'], config[A2afa(10)]()));
        },
        'find': {
            'video': function () {
                var A3c58d1 = {};
                if (window !== window['top'])
                    A3c58d1['a'] = document['querySelector']('video');
                return A3c58d1['b'] = [...document['querySelectorAll']('video')][A2afa(11)](A2359ea => A2359ea['offsetHeight'])[0], A3c58d1['b'] || A3c58d1['a'];
            }
        },
        'load': function () {
            if (window === window[A2afa(12)])
                document[A2afa(13)]('yt-navigate-finish', config[A2afa(14)]), document['addEventListener'](A2afa(15), config[A2afa(14)]);
            else {
                let A41490e = config['find'][A2afa(8)]();
                A41490e && A41490e[A2afa(13)]('progress', config[A2afa(14)], { 'once': !![] });
            }
        },
        'inject': function () {
            if (config['url']) {
                let A2bd5b2 = config['find'][A2afa(8)]();
                if (A2bd5b2) {
                    var A2791a8 = A2bd5b2['getAttribute']('yt-navigate-finish');
                    if (A2791a8 !== null) {
                        var Ac703c4 = document['getElementById'](config['id']);
                        !Ac703c4 && (Ac703c4 = document['createElement']('script'), Ac703c4['type'] = 'text/javascript', Ac703c4[A2afa(16)]('id', config['id']), Ac703c4['src'] = chrome['runtime']['getURL'](A2afa(17)), Ac703c4['dataset'][A2afa(9)] = config['url'], Ac703c4[A2afa(18)] = function () {
                            Ac703c4[A2afa(19)](), config[A2afa(9)] = '';
                        }, document['documentElement'][A2afa(20)](Ac703c4), document[A2afa(21)](A2afa(15), config[A2afa(14)]));
                    }
                }
            }
        }
    };
config[A2afa(22)](), background['send']('load'), background['receive']('info', config['info']);
function A2a93() {
    var A531377 = [
        'onMessage',
        'function',
        'path',
        'background-to-page',
        'method',
        'runtime',
        'sendMessage',
        'page-to-background',
        'video',
        'url',
        'inject',
        'filter',
        'top',
        'addEventListener',
        'listener',
        'yt-page-data-updated',
        'setAttribute',
        'data/content_script.js',
        'onload',
        'remove',
        'appendChild',
        'removeEventListener',
        'load'
    ];
    A2a93 = function () {
        return A531377;
    };
    return A2a93();
}