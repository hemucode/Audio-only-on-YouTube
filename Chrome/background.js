var config = {};
config['session'] = {
    set 'tab'(A151f19) {
        app['session']['write']('tab', A151f19);
    },
    get 'tab'() {
        return app['session']['read']('tab') !== undefined ? app['session']['read']('tab') : {};
    }
}, config['addon'] = {
    set 'state'(A1504cd) {
        app['storage']['write']('state', A1504cd);
    },
    get 'state'() {
        return app['storage']['read']('state') !== undefined ? app['storage']['read']('state') : 'ON';
    }
}, config['welcome'] = {
    set 'lastupdate'(A453d4b) {
        app['storage']['write']('lastupdate', A453d4b);
    },
    get 'lastupdate'() {
        return app['storage']['read']('lastupdate') !== undefined ? app['storage']['read']('lastupdate') : 0;
    }
}, config['netrequest'] = {
    'rule': {
        'new': {
            '1': {
                'id': 1,
                'priority': 1,
                'action': { 'type': 'block' },
                'condition': {
                    'urlFilter': 'mime=video',
                    'resourceTypes': ['xmlhttprequest'],
                    'initiatorDomains': ['youtube.com']
                }
            },
            '2': {
                'id': 2,
                'priority': 1,
                'action': { 'type': 'block' },
                'condition': {
                    'domainType': 'thirdParty',
                    'resourceTypes': ['xmlhttprequest'],
                    'regexFilter': 'googlevideo\\.com\\/videoplayback(.*)mime=video|initplayback'
                }
            }
        },
        'old': {
            '1': {
                'id': 1,
                'priority': 1,
                'action': { 'type': 'block' },
                'condition': {
                    'urlFilter': 'mime=video',
                    'domains': ['youtube.com'],
                    'resourceTypes': ['xmlhttprequest']
                }
            },
            '2': {
                'id': 2,
                'priority': 1,
                'action': { 'type': 'block' },
                'condition': {
                    'domainType': 'thirdParty',
                    'resourceTypes': ['xmlhttprequest'],
                    'regexFilter': 'googlevideo\\.com\\/videoplayback(.*)mime=video|initplayback'
                }
            }
        }
    }
};
function A3c85() {
    var Ac3faa0 = [
        'lastError',
        'session',
        'storage',
        'tabs'
    ];
    A3c85 = function () {
        return Ac3faa0;
    };
    return A3c85();
}
var app = {};
function A36f6(A3c85b7, A36f637) {
    var A131c05 = A3c85();
    return A36f6 = function (A759c4f, A59cd19) {
        A759c4f = A759c4f - 0;
        var A4923fb = A131c05[A759c4f];
        return A4923fb;
    }, A36f6(A3c85b7, A36f637);
}
app['error'] = function () {
    return chrome['runtime'][A36f6(0)];
}, app['session'] = {
    'object': {},
    'read': function (A8b9f83) {
        return app['session']['object'][A8b9f83];
    },
    'load': function () {
        chrome['storage']['session']['get'](null, function (A4ac2a5) {
            app[A36f6(1)]['object'] = A4ac2a5;
        });
    },
    'write': function (A2ab115, A468a5e, A111903) {
        var A283ef3 = {};
        A283ef3[A2ab115] = A468a5e, app['session']['object'][A2ab115] = A468a5e, chrome['storage']['session']['set'](A283ef3, function (A98f462) {
            A111903 && A111903(A98f462);
        });
    }
}, app['on'] = {
    'management': function (A4c913c) {
        chrome['management']['getSelf'](A4c913c);
    },
    'uninstalled': function (A1eb511) {
        chrome['runtime']['setUninstallURL'](A1eb511, function () {
        });
    },
    'installed': function (A1e374a) {
        chrome['runtime']['onInstalled']['addListener'](function (A141371) {
            app['storage']['load'](function () {
                A1e374a(A141371);
            });
        });
    },
    'startup': function (A3b6441) {
        chrome['runtime']['onStartup']['addListener'](function (A4ba06c) {
            app['storage']['load'](function () {
                A3b6441(A4ba06c);
            });
        });
    },
    'connect': function (A121584) {
        chrome['runtime']['onConnect']['addListener'](function (A256006) {
            app['storage']['load'](function () {
                if (A121584)
                    A121584(A256006);
            });
        });
    },
    'message': function (A2d6269) {
        chrome['runtime']['onMessage']['addListener'](function (A15daf9, A247366, A593e59) {
            return app['storage']['load'](function () {
                A2d6269(A15daf9, A247366, A593e59);
            }), !![];
        });
    }
}, app['storage'] = (function () {
    return chrome['storage']['onChanged']['addListener'](function () {
        if (app['session'])
            app['session']['load']();
        chrome['storage']['local']['get'](null, function (A5ebce0) {
            app['storage']['local'] = A5ebce0, app['storage']['callback'] && (typeof app['storage']['callback'] === 'function' && app[A36f6(2)]['callback'](A5ebce0));
        });
    }), {
        'local': {},
        'callback': null,
        'read': function (A5b7ce2) {
            return app['storage']['local'][A5b7ce2];
        },
        'write': function (A15ba29, A3e6152, A181aa4) {
            var A4b7394 = {};
            A4b7394[A15ba29] = A3e6152, app['storage']['local'][A15ba29] = A3e6152, chrome['storage']['local']['set'](A4b7394, function (A3a9114) {
                A181aa4 && A181aa4(A3a9114);
            });
        },
        'load': function (Af35e3e) {
            var A1b42d4 = Object['keys'](app['storage']['local']);
            if (A1b42d4 && A1b42d4['length'])
                Af35e3e && Af35e3e('cache');
            else {
                if (app['session'])
                    app['session']['load']();
                chrome['storage']['local']['get'](null, function (A5287e7) {
                    app['storage']['local'] = A5287e7, Af35e3e && Af35e3e('disk');
                });
            }
        }
    };
}()), app['button'] = {
    'on': {
        'clicked': function (A33bb62) {
            chrome['action']['onClicked']['addListener'](function (Aaba5fc) {
                app['storage']['load'](function () {
                    A33bb62(Aaba5fc);
                });
            });
        }
    },
    'title': function (A39cd7a, A48af6c, Abdc80f) {
        if (A48af6c) {
            var A477a71 = { 'title': A48af6c };
            if (A39cd7a)
                A477a71['tabId'] = A39cd7a;
            chrome['action']['setTitle'](A477a71, function (A39444f) {
                if (Abdc80f)
                    Abdc80f(A39444f);
            });
        }
    },
    'icon': function (A447bd2, A39a859, A369250, A48a2eb) {
        if (A39a859 && typeof A39a859 === 'object') {
            var A5de4b3 = { 'path': A39a859 };
            if (A447bd2)
                A5de4b3['tabId'] = A447bd2;
            chrome['action']['setIcon'](A5de4b3, function (A2a6b59) {
                if (A48a2eb)
                    A48a2eb(A2a6b59);
            });
        } else {
            if (A369250 && typeof A369250 === 'object') {
                var A5de4b3 = { 'imageData': A369250 };
                if (A447bd2)
                    A5de4b3['tabId'] = A447bd2;
                chrome['action']['setIcon'](A5de4b3, function (A335348) {
                    if (A48a2eb)
                        A48a2eb(A335348);
                });
            } else {
                var A5de4b3 = {
                    'path': {
                        '16': '../data/icons/' + (A39a859 ? A39a859 + '/' : '') + '16.png',
                        '32': '../data/icons/' + (A39a859 ? A39a859 + '/' : '') + '32.png',
                        '48': '../data/icons/' + (A39a859 ? A39a859 + '/' : '') + '48.png',
                        '64': '../data/icons/' + (A39a859 ? A39a859 + '/' : '') + '64.png'
                    }
                };
                if (A447bd2)
                    A5de4b3['tabId'] = A447bd2;
                chrome['action']['setIcon'](A5de4b3, function (A5bc623) {
                    if (A48a2eb)
                        A48a2eb(A5bc623);
                });
            }
        }
    }
}, app['page'] = {
    'port': null,
    'sender': { 'port': {} },
    'message': {},
    'receive': function (A4d0a53, A4095a3) {
        A4d0a53 && (app['page']['message'][A4d0a53] = A4095a3);
    },
    'post': function (A507dee, A1687bd, A73a1) {
        if (A507dee) {
            if (A73a1)
                app['page']['sender']['port'][A73a1] && app['page']['sender']['port'][A73a1]['postMessage']({
                    'data': A1687bd,
                    'method': A507dee,
                    'path': 'background-to-page'
                });
            else
                app['page']['port'] && app['page']['port']['postMessage']({
                    'data': A1687bd,
                    'method': A507dee,
                    'path': 'background-to-page'
                });
        }
    },
    'send': function (A30e63e, A4f531c, A546183, A1dabd2) {
        A30e63e && chrome['tabs']['query']({}, function (A31e75b) {
            var A5ecd63 = chrome['runtime']['lastError'];
            if (A31e75b && A31e75b['length']) {
                var A5032c6 = {
                    'method': A30e63e,
                    'data': A4f531c ? A4f531c : {},
                    'path': 'background-to-page'
                };
                A31e75b['forEach'](function (A1a6a50) {
                    A1a6a50 && (A5032c6['data']['tabId'] = A1a6a50['id'], A5032c6['data']['top'] = A1a6a50['url'] ? A1a6a50['url'] : '', A5032c6['data']['title'] = A1a6a50['title'] ? A1a6a50['title'] : '', A546183 !== null && A546183 !== undefined ? A546183 === A1a6a50['id'] && (A1dabd2 !== null && A1dabd2 !== undefined ? chrome['tabs']['sendMessage'](A1a6a50['id'], A5032c6, { 'frameId': A1dabd2 }, app['error']) : chrome['tabs']['sendMessage'](A1a6a50['id'], A5032c6, app['error'])) : chrome['tabs']['sendMessage'](A1a6a50['id'], A5032c6, app['error']));
                });
            }
        });
    }
}, app['tab'] = {
    'on': {
        'removed': function (A40b3e1) {
            chrome['tabs']['onRemoved']['addListener'](function (A2c1710, A51c71d) {
                app['storage']['load'](function () {
                    A40b3e1(A2c1710);
                });
            });
        }
    },
    'open': function (A441c3f, A295848, A1e95be, A500af7) {
        var A847c3e = {
            'url': A441c3f,
            'active': A1e95be !== undefined ? A1e95be : !![]
        };
        A295848 !== undefined && (typeof A295848 === 'number' && (A847c3e['index'] = A295848 + 1)), chrome['tabs']['create'](A847c3e, function (A408436) {
            if (A500af7)
                A500af7(A408436);
        });
    },
    'query': {
        'index': function (A3a9234) {
            chrome['tabs']['query']({
                'active': !![],
                'currentWindow': !![]
            }, function (A48e42b) {
                var Afcc0eb = chrome['runtime']['lastError'];
                if (A48e42b && A48e42b['length'])
                    A3a9234(A48e42b[0]['index']);
                else
                    A3a9234(undefined);
            });
        },
        'active': function (A52f6ae) {
            chrome['tabs']['query']({ 'active': !![] }, function (A10e48b) {
                var A1df2a0 = chrome['runtime']['lastError'];
                if (A10e48b && A10e48b['length'])
                    A52f6ae(A10e48b[0]);
                else
                    A52f6ae(undefined);
            });
        }
    },
    'reload': function (A1bfb57, Ab085a1, A5ca21c) {
        A1bfb57 ? Ab085a1 && typeof Ab085a1 === 'object' ? chrome['tabs']['reload'](A1bfb57, Ab085a1, function (A352fd2) {
            if (A5ca21c)
                A5ca21c(A352fd2);
        }) : chrome['tabs']['reload'](A1bfb57, { 'bypassCache': Ab085a1 !== undefined ? Ab085a1 : ![] }, function (Ab02eff) {
            if (A5ca21c)
                A5ca21c(Ab02eff);
        }) : chrome[A36f6(3)]['query']({
            'active': !![],
            'currentWindow': !![]
        }, function (A479bd5) {
            var A4ca917 = chrome['runtime']['lastError'];
            A479bd5 && A479bd5['length'] && (Ab085a1 && typeof Ab085a1 === 'object' ? chrome['tabs']['reload'](A479bd5[0]['id'], Ab085a1, function (A2975b0) {
                if (A5ca21c)
                    A5ca21c(A2975b0);
            }) : chrome['tabs']['reload'](A479bd5[0]['id'], { 'bypassCache': Ab085a1 !== undefined ? Ab085a1 : ![] }, function (A111e52) {
                if (A5ca21c)
                    A5ca21c(A111e52);
            }));
        });
    }
};

app['version'] = function () {
    return chrome['runtime']['getManifest']()['version'];
}, app[A53b4(0)] = function () {
    return chrome['runtime']['getManifest']()['homepage_url'];
};
function A53b4(A4db7d2, A53b4d6) {
    var A1ec1da = A4db7();
    return A53b4 = function (A3abe69, A2b2fc9) {
        A3abe69 = A3abe69 - 0;
        var A5f3c4e = A1ec1da[A3abe69];
        return A5f3c4e;
    }, A53b4(A4db7d2, A53b4d6);
}
!navigator['webdriver'] && (app['on']['uninstalled'](app['homepage']() + '#uninstall'), app['on']['installed'](function (A5a82db) {
    app['on']['management'](function (A149e6d) {
        A149e6d['installType'] === A53b4(1) && app[A53b4(2)]['query']['index'](function (Aac758e) {
            var A5e16d6 = A5a82db['previousVersion'] !== undefined && A5a82db['previousVersion'] !== app['version'](), A3e906f = A5e16d6 && parseInt((Date['now']() - config['welcome']['lastupdate']) / (24 * 0xe10 * 1000)) > 45;
            if (A5a82db['reason'] === 'install' || A5a82db['reason'] === 'update' && A3e906f) {
                var A4d8560 = app[A53b4(0)]();
                app['tab']['open'](A4d8560, Aac758e, A5a82db['reason'] === A53b4(3)), config['welcome']['lastupdate'] = Date['now']();
            }
        });
    });
}));
function A4db7() {
    var A330425 = [
        'homepage',
        'normal',
        'tab',
        'install',
        'page',
        'message',
        'function',
        'frameId',
        'title',
        'top',
        'url',
        'name',
        'sender',
        'port'
    ];
    A4db7 = function () {
        return A330425;
    };
    return A4db7();
}
app['on']['message'](function (A1405aa, A403caa) {
    if (A1405aa) {
        if (A1405aa['path'] === 'page-to-background')
            for (var A57e393 in app[A53b4(4)]['message']) {
                if (app['page'][A53b4(5)][A57e393]) {
                    if (typeof app['page']['message'][A57e393] === A53b4(6)) {
                        if (A57e393 === A1405aa['method']) {
                            var A1ba59a = A1405aa['data'] || {};
                            if (A403caa) {
                                A1ba59a[A53b4(7)] = A403caa['frameId'];
                                if (A403caa[A53b4(2)]) {
                                    if (A1ba59a['tabId'] === undefined)
                                        A1ba59a['tabId'] = A403caa['tab']['id'];
                                    if (A1ba59a['title'] === undefined)
                                        A1ba59a['title'] = A403caa['tab'][A53b4(8)] ? A403caa['tab']['title'] : '';
                                    if (A1ba59a['top'] === undefined)
                                        A1ba59a[A53b4(9)] = A403caa['tab']['url'] ? A403caa['tab']['url'] : A403caa['url'] ? A403caa[A53b4(10)] : '';
                                }
                            }
                            app['page']['message'][A57e393](A1ba59a);
                        }
                    }
                }
            }
    }
}), app['on']['connect'](function (A1d94c1) {
    A1d94c1 && (A1d94c1['name'] && (A1d94c1[A53b4(11)] in app && (app[A1d94c1['name']]['port'] = A1d94c1), A1d94c1['sender'] && (A1d94c1['sender']['tab'] && (app['interface']['port'] = A1d94c1))), A1d94c1['onDisconnect']['addListener'](function (A32559f) {
        app['storage']['load'](function () {
            A32559f && (A32559f['name'] && (A32559f['name'] in app && (app[A32559f['name']]['port'] = null), A32559f['sender'] && (A32559f[A53b4(12)]['tab'] && (app['interface']['port'] = null))));
        });
    }), A1d94c1['onMessage']['addListener'](function (A205d56) {
        app['storage']['load'](function () {
            if (A205d56) {
                if (A205d56['path']) {
                    if (A205d56['port']) {
                        if (A205d56['port'] in app) {
                            if (A205d56['path'] === A205d56[A53b4(13)] + '-to-background')
                                for (var A1e0aa5 in app[A205d56['port']]['message']) {
                                    app[A205d56[A53b4(13)]]['message'][A1e0aa5] && (typeof app[A205d56['port']]['message'][A1e0aa5] === 'function' && (A1e0aa5 === A205d56['method'] && app[A205d56['port']]['message'][A1e0aa5](A205d56['data'])));
                                }
                        }
                    }
                }
            }
        });
    }));
});

function A9e5c() {
    var A1be415 = [
        'netrequest',
        'rules',
        'declarativeNetRequest',
        'storage',
        'load',
        'updateSessionRules',
        'get',
        'remove',
        'update',
        'condition',
        'push',
        'priority',
        'action'
    ];
    A9e5c = function () {
        return A1be415;
    };
    return A9e5c();
}
function A14e9(A9e5ca5, A14e921) {
    var A3e38a3 = A9e5c();
    return A14e9 = function (A272887, A21faef) {
        A272887 = A272887 - 0;
        var A5678f9 = A3e38a3[A272887];
        return A5678f9;
    }, A14e9(A9e5ca5, A14e921);
}
app['netrequest'] = {
    'display': {
        'badge': {
            'text': async function (A37cd3f) {
                if (chrome['declarativeNetRequest']) {
                    var A271e54 = A37cd3f !== undefined ? A37cd3f : !![];
                    await chrome['declarativeNetRequest']['setExtensionActionOptions']({ 'displayActionCountAsBadgeText': A271e54 });
                }
            }
        }
    },
    'engine': {
        'rules': {
            'get': function () {
                return new Promise((A50d2cf, A53b855) => {
                    app['storage']['load'](function () {
                        chrome['declarativeNetRequest'] && (app[A14e9(0)][A14e9(1)]['scope'] === 'dynamic' ? chrome['declarativeNetRequest']['getDynamicRules']()['then'](A50d2cf)['catch'](A53b855) : chrome[A14e9(2)]['getSessionRules']()['then'](A50d2cf)['catch'](A53b855));
                    });
                });
            },
            'update': function (A334cde) {
                return new Promise((A58c2b8, A2d5ada) => {
                    app[A14e9(3)][A14e9(4)](function () {
                        if (chrome['declarativeNetRequest']) {
                            if (app['netrequest'][A14e9(1)]['scope'] === 'dynamic')
                                try {
                                    chrome['declarativeNetRequest']['updateDynamicRules'](A334cde)['then'](A58c2b8)['catch'](A2d5ada);
                                } catch (A118ff3) {
                                    A2d5ada();
                                }
                            else
                                try {
                                    chrome['declarativeNetRequest'][A14e9(5)](A334cde)['then'](A58c2b8)['catch'](A2d5ada);
                                } catch (A22a8bb) {
                                    A2d5ada();
                                }
                        }
                    });
                });
            }
        }
    },
    'rules': {
        'stack': [],
        set 'scope'(A29a6ca) {
            app['storage']['write']('rulescope', A29a6ca);
        },
        get 'scope'() {
            return app['storage']['read']('rulescope') !== undefined ? app['storage']['read']('rulescope') : 'dynamic';
        },
        'update': async function () {
            var A4177a5 = await app['netrequest']['engine']['rules'][A14e9(6)]();
            if (A4177a5 && A4177a5['length']) {
                var A3bd42a = A4177a5['map'](function (A1f9107) {
                    return A1f9107['id'];
                });
                await app[A14e9(0)]['rules'][A14e9(7)]['by']['ids'](A3bd42a);
            }
            var A4c40f3 = app['netrequest'][A14e9(1)]['stack'];
            A4c40f3 && A4c40f3['length'] && await app['netrequest']['engine']['rules'][A14e9(8)]({ 'addRules': A4c40f3 });
        },
        'push': function (A59c803) {
            if (A59c803) {
                if (A59c803['action'] && A59c803[A14e9(9)]) {
                    var A4ac6e7 = app[A14e9(0)]['rules']['find']['next']['available']['id']();
                    A4ac6e7 && app[A14e9(0)]['rules']['stack'][A14e9(10)]({
                        'id': A4ac6e7,
                        'action': A59c803['action'],
                        'condition': A59c803['condition'],
                        'priority': A59c803['priority'] !== undefined ? A59c803[A14e9(11)] : 0x1
                    });
                }
            }
        },
        'add': async function (A228f2d) {
            A228f2d && (A228f2d['id'] && A228f2d[A14e9(12)] && A228f2d['condition'] && await app['netrequest']['engine']['rules']['update']({
                'removeRuleIds': [A228f2d['id']],
                'addRules': [{
                        'id': A228f2d['id'],
                        'action': A228f2d['action'],
                        'condition': A228f2d['condition'],
                        'priority': A228f2d[A14e9(11)] !== undefined ? A228f2d['priority'] : 0x1
                    }]
            }));
        },
        'find': {
            'next': {
                'available': {
                    'id': function () {
                        var A437dfb = 1, A73b34 = app['netrequest']['rules']['stack'];
                        if (A73b34 && A73b34['length']) {
                            var A1d1d59 = A73b34['map'](function (A25db31) {
                                return A25db31['id'];
                            })['sort'](function (A48b804, Aa2ccbe) {
                                return A48b804 - Aa2ccbe;
                            });
                            if (A1d1d59 && A1d1d59['length'])
                                for (var A418ede in A1d1d59) {
                                    A1d1d59[A418ede] > -1 && A1d1d59[A418ede] === A437dfb && A437dfb++;
                                }
                        }
                        return A437dfb;
                    }
                }
            }
        },
        'remove': {
            'by': {
                'ids': async function (A267bd9) {
                    A267bd9 && A267bd9['length'] && await app[A14e9(0)]['engine']['rules']['update']({ 'removeRuleIds': A267bd9 });
                },
                'action': {
                    'type': async function (A242879, A1a182e) {
                        if (A242879) {
                            var A2faee6 = await app['netrequest']['engine'][A14e9(1)]['get']();
                            if (A2faee6 && A2faee6['length']) {
                                var A2572b0 = A2faee6['filter'](function (A4dfc1e) {
                                    if (A4dfc1e) {
                                        if (A4dfc1e['action']) {
                                            if (A4dfc1e['action']['type'] === A242879) {
                                                if (A1a182e) {
                                                    if (A1a182e in A4dfc1e['action'])
                                                        return !![];
                                                } else
                                                    return !![];
                                            }
                                        }
                                    }
                                    return ![];
                                })['map'](function (A5856b5) {
                                    return A5856b5['id'];
                                });
                                await app['netrequest'][A14e9(1)]['remove']['by']['ids'](A2572b0), app['netrequest']['rules']['stack'] = await app[A14e9(0)]['engine']['rules']['get']();
                            }
                        }
                    }
                }
            }
        }
    }
};

function A4ab2() {
    var A473640 = [
        'webrequest',
        'before',
        'listener',
        'webRequest'
    ];
    A4ab2 = function () {
        return A473640;
    };
    return A4ab2();
}
function A5c70(A4ab24d, A5c7025) {
    var A3c68e3 = A4ab2();
    return A5c70 = function (A2dc149, Ae4d0fb) {
        A2dc149 = A2dc149 - 0;
        var A33ada4 = A3c68e3[A2dc149];
        return A33ada4;
    }, A5c70(A4ab24d, A5c7025);
}
app[A5c70(0)] = {
    'on': {
        'before': {
            'request': {
                'listener': null,
                'callback': function (A4ad9f0) {
                    app[A5c70(0)]['on'][A5c70(1)]['request'][A5c70(2)] = A4ad9f0;
                },
                'remove': function () {
                    chrome[A5c70(3)] && chrome[A5c70(3)]['onBeforeRequest']['removeListener'](app['webrequest']['on']['before']['request']['listener']);
                },
                'add': function (A293070) {
                    var A1b5f0f = [], A32f8a8 = A293070 ? A293070 : { 'urls': ['*://*/*'] };
                    chrome['webRequest'] && (chrome['webRequest']['onBeforeRequest']['removeListener'](app[A5c70(0)]['on']['before']['request'][A5c70(2)]), chrome['webRequest']['onBeforeRequest']['addListener'](app['webrequest']['on'][A5c70(1)]['request']['listener'], A32f8a8, A1b5f0f));
                }
            }
        }
    }
};

function A46bd(Aa15967, A46bd79) {
    var A3ef8d4 = Aa159();
    return A46bd = function (A30508a, A37dcfc) {
        A30508a = A30508a - 0;
        var A1d9380 = A3ef8d4[A30508a];
        return A1d9380;
    }, A46bd(Aa15967, A46bd79);
}
var core = {
    'start': function () {
        core['load']();
    },
    'install': function () {
        core['load']();
    },
    'load': function () {
        core['update'](![]);
    },
    'update': function (A1636ba) {
        core['register']['netrequest'](), app[A46bd(0)]['icon'](null, config['addon']['state']), app['button']['title'](null, 'Audio only on YouTube™ :: ' + config['addon']['state']), A1636ba && (core['register']['webrequest'](), app['tab']['query']['active'](function (A2eecc1) {
            if (A2eecc1) {
                var A1e8831 = config[A46bd(1)]['tab'][A2eecc1['id']];
                A1e8831 && (A1e8831['url'] && (A1e8831['url']['indexOf']('.youtube.') !== -1 && app['tab']['reload'](A1e8831['id'])));
            }
        }));
    },
    'register': {
        'webrequest': function () {
            app['webrequest']['on']['before']['request']['remove'](), config['addon']['state'] === 'ON' && app['webrequest']['on']['before']['request']['add']({
                'types': ['xmlhttprequest'],
                'urls': ['*://*.googlevideo.com/*']
            });
        },
        'netrequest': async function () {
            await app['netrequest']['display']['badge']['text'](![]), await app['netrequest']['rules']['remove']['by']['action']['type']('block');
            if (config['addon']['state'] === 'ON')
                try {
                    await app['netrequest']['rules']['add'](config['netrequest']['rule']['new']['1']), await app['netrequest']['rules']['add'](config['netrequest']['rule']['new']['2']);
                } catch (A954b24) {
                    await app['netrequest']['rules']['add'](config['netrequest']['rule']['old']['1']), await app['netrequest']['rules']['add'](config['netrequest']['rule']['old']['2']);
                }
        }
    }
};
app['button']['on']['clicked'](function () {
    config['addon']['state'] = config['addon']['state'] === 'ON' ? 'OFF' : 'ON', core['update'](!![]);
}), app['tab']['on']['removed'](function (A443e9b) {
    var A486bf8 = config['session']['tab'];
    delete A486bf8[A443e9b], config['session']['tab'] = A486bf8;
}), app['page']['receive']('load', function (A44627f) {
    if (A44627f) {
        var A45ba84 = config['session']['tab'];
        A45ba84[A44627f['tabId']] = {
            'url': A44627f['top'],
            'id': A44627f['tabId']
        }, config['session']['tab'] = A45ba84;
    }
}), app['webrequest']['on']['before']['request']['callback'](function (A15c360) {
    if (A15c360) {
        if (A15c360['url']) {
            if (A15c360['url']['indexOf']('mime=audio') !== -1) {
                var A31d1dd = A15c360['url']['split']('?');
                if (A31d1dd) {
                    if (A31d1dd['length'] > 1) {
                        var A4fe143 = [], A19e3a3 = A31d1dd[0], A52a247 = [
                                'rn',
                                'rbuf',
                                'range'
                            ], Aaf236b = A31d1dd[1]['split'](/[&;]/g);
                        A52a247['forEach'](function (Aeac91e) {
                            var A2b5730 = encodeURIComponent(Aeac91e) + '=';
                            A4fe143 = Aaf236b['filter'](A1f1201 => A1f1201['startsWith'](A2b5730) === ![]);
                        }), A4fe143['length'] && app['page']['send']('info', { 'url': A19e3a3 + '?' + A4fe143['join']('&') }, A15c360['tabId'], A15c360['frameId']);
                    }
                }
            }
        }
    }
}), app['on']['startup'](core['start']), app['on']['installed'](core['install']), app['storage']['load'](core['register']['webrequest']);
function Aa159() {
    var Af2005a = [
        'button',
        'session'
    ];
    Aa159 = function () {
        return Af2005a;
    };
    return Aa159();
}
