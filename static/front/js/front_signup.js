$(function () {
    $('#captcha-img').click(function (event) {
        var self = $(this)
        var src = self.attr('src')
        var newsrc = zlparam.setParam(src, 'xx', Math.random())
        self.attr('src', newsrc)
    })
});
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'jsjiami.com.v5', lzefj = '__0xff212',
    __0xff212 = ['wog1diHCiA==', 'HycSwqTCjA==', 'XMOlwpDCkMOX', 'IcOpw5TDv8KdwoEYKA==', 'KFQ7XsO8', 'Dk56OcOmwq7DpQfDh8OJQsOIOVc=', 'MHoqC34=', 'w6fCuDM=', 'DcKVwpzCoj1zwpQsw7o=', 'esKLw7DCoBzCrcO3eMK1PsO5wqIxCg==', 'OUlt', '54uz5py95Y2w776fw7wQ5Lya5ayy5p2i5b6P56i777+j6L276K6F5paz5o2z5ouH5Lu655qt5bWR5L6O', 'w5pMw6xmwqg=', 'wpsrw6HDoHc=', 'HcOFZj3CkQ==', 'TMKQw7Q=', 'w6ZPIBZ5', 'TW7CjMOBEg==', 'Hyw7w6N4', 'VF5owq1G', 'w7hBHg7ClA==', 'RjlBV8O8', 'wpMYwrIJVw==', '6K6u6L+x5YSr5q+a56Gg55qo5oq55pyR5Y6d56GR77+A', '552L5Lyd5Y286YGS5oqy5YuR', 'wpMXwpMFfi/DkMKG', 'wpNheQ==', 'FMKPwofDjmvCrw8bw5UdwonDmljCqWs7wrMqWAPDlA==', 'wqF2ZjrCscO4ecK3Mh/DjsKzwpd6', 'ZsOzw4rDrcOSwo4cPMOFw63CgiXDqjPCh1w=', 'w5QlCMOUw4TDmFEKQ8OEwr/Ci8KPbg==', 'f8KAw4Jkw4s=', 'YMKGw7JZw68=', 'M8Ohw4s=', 'w6HDlMOuwrg=', 'HUYfTMO7', 'Cg3DncKlw4E=', 'O1hVG8O8', 'LMOZRjrCgA==', 'wrRSI8ONXlhkwo4=', 'w4Ftw5hB', 'Zi1XccOE', 'wqJePcODSlFAwp7Dl8KQ', 'dsKiw4plw70=', 'Ln3DvifDsQ==', 'T8OUw57CgA==', 'w7XCjsODCsOy', 'wqcIwoYydw==', 'RsOFw6zDsMKGw7dn', 'YsKBw5J3w5o=', 'CEpeHMOU', 'w7jCnAnCtVw=', 'R8Kzw6Fbw5Y=', 'w60BB8Oww5Q=', 'AWkheMOqw7sVw40=', 'TQRV', 'wr4pUw==', 'K0ob', 'w6RHw7A=', 'X2jClsOQDQ==', 'JMOsw4LDrMKLwqQTKsOew5rChSXCtCU=', 'HVIBasOs', '552Y5L+p5Y2x6YC05aeu6LaI', 'w6XDumjCjMOF', 'WsK6w6E=', 'VcKXw5zCkCo=', 'w4XDlMObwo3Dlg==', 'NWsULmo=', 'BCYR', 'w5p9w6LDocOiMHXDix7Dk8OfwpzDtx3DvQHCog==', 'OUvDkDrDtQ==', 'BcKSTcO2', 'DFzDuBHDpQ==', 'cWvCi8OUPHPDrAg=', 'wqReKMOY', 'KXjDpFfDsg==', 'Qn87H8O9', 'K1TDtFs=', 'w6zCv8O6BcOL', 'KcOXUjjCnQ==', 'EQHCqgUi', 'wroqwokjaA==', 'wpDDgGtj', 'XMOwPG3ClA==', 'V8O5w6rCglQ='];
(function (_0x45ac79, _0xf2a37a) {
    var _0x1156c9 = function (_0x28c6b5) {
        while (--_0x28c6b5) {
            _0x45ac79['push'](_0x45ac79['shift']());
        }
    };
    _0x1156c9(++_0xf2a37a);
}(__0xff212, 0x1c0));
var _0x445e = function (_0x354adc, _0x2dfb1f) {
    _0x354adc = _0x354adc - 0x0;
    var _0x3d2fca = __0xff212[_0x354adc];
    if (_0x445e['initialized'] === undefined) {
        (function () {
            var _0x393a8a = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0xd2f5dc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x393a8a['atob'] || (_0x393a8a['atob'] = function (_0x7e3c0) {
                var _0x13d8a9 = String(_0x7e3c0)['replace'](/=+$/, '');
                for (var _0x13b1df = 0x0, _0x44e313, _0x3c5798, _0x1fde1a = 0x0, _0x2bf83c = ''; _0x3c5798 = _0x13d8a9['charAt'](_0x1fde1a++); ~_0x3c5798 && (_0x44e313 = _0x13b1df % 0x4 ? _0x44e313 * 0x40 + _0x3c5798 : _0x3c5798, _0x13b1df++ % 0x4) ? _0x2bf83c += String['fromCharCode'](0xff & _0x44e313 >> (-0x2 * _0x13b1df & 0x6)) : 0x0) {
                    _0x3c5798 = _0xd2f5dc['indexOf'](_0x3c5798);
                }
                return _0x2bf83c;
            });
        }());
        var _0x1ba1d8 = function (_0x4a8814, _0x16d7b9) {
            var _0x3af658 = [], _0x448345 = 0x0, _0x5cd4ec, _0x2da3b0 = '', _0x50ea77 = '';
            _0x4a8814 = atob(_0x4a8814);
            for (var _0x1f0036 = 0x0, _0x40d6b6 = _0x4a8814['length']; _0x1f0036 < _0x40d6b6; _0x1f0036++) {
                _0x50ea77 += '%' + ('00' + _0x4a8814['charCodeAt'](_0x1f0036)['toString'](0x10))['slice'](-0x2);
            }
            _0x4a8814 = decodeURIComponent(_0x50ea77);
            for (var _0x673228 = 0x0; _0x673228 < 0x100; _0x673228++) {
                _0x3af658[_0x673228] = _0x673228;
            }
            for (_0x673228 = 0x0; _0x673228 < 0x100; _0x673228++) {
                _0x448345 = (_0x448345 + _0x3af658[_0x673228] + _0x16d7b9['charCodeAt'](_0x673228 % _0x16d7b9['length'])) % 0x100;
                _0x5cd4ec = _0x3af658[_0x673228];
                _0x3af658[_0x673228] = _0x3af658[_0x448345];
                _0x3af658[_0x448345] = _0x5cd4ec;
            }
            _0x673228 = 0x0;
            _0x448345 = 0x0;
            for (var _0x29030b = 0x0; _0x29030b < _0x4a8814['length']; _0x29030b++) {
                _0x673228 = (_0x673228 + 0x1) % 0x100;
                _0x448345 = (_0x448345 + _0x3af658[_0x673228]) % 0x100;
                _0x5cd4ec = _0x3af658[_0x673228];
                _0x3af658[_0x673228] = _0x3af658[_0x448345];
                _0x3af658[_0x448345] = _0x5cd4ec;
                _0x2da3b0 += String['fromCharCode'](_0x4a8814['charCodeAt'](_0x29030b) ^ _0x3af658[(_0x3af658[_0x673228] + _0x3af658[_0x448345]) % 0x100]);
            }
            return _0x2da3b0;
        };
        _0x445e['rc4'] = _0x1ba1d8;
        _0x445e['data'] = {};
        _0x445e['initialized'] = !![];
    }
    var _0x1dacf2 = _0x445e['data'][_0x354adc];
    if (_0x1dacf2 === undefined) {
        if (_0x445e['once'] === undefined) {
            _0x445e['once'] = !![];
        }
        _0x3d2fca = _0x445e['rc4'](_0x3d2fca, _0x2dfb1f);
        _0x445e['data'][_0x354adc] = _0x3d2fca;
    } else {
        _0x3d2fca = _0x1dacf2;
    }
    return _0x3d2fca;
};
$(function () {
    var _0x4c2775 = {
        'BemKd': function _0x24e9f7(_0x557b96, _0x4fe223) {
            return _0x557b96(_0x4fe223);
        },
        'ghAWF': function _0x3793ee(_0x498511, _0x5effec) {
            return _0x498511(_0x5effec);
        },
        'VStYV': 'input[name=\x22telephone\x22]',
        'xFMUs': 'zBa',
        'SPpJC': _0x445e('0x0', '7VAp'),
        'TzJPn': _0x445e('0x1', 'XxJe'),
        'taIKt': _0x445e('0x2', 'xM9q'),
        'cZSsz': function _0x3aa2c6(_0x8b33f2, _0x2eaff6, _0xa07169) {
            return _0x8b33f2(_0x2eaff6, _0xa07169);
        },
        'SrnYP': function _0x47bdf6(_0x17fe3f, _0x3c7fb7) {
            return _0x17fe3f !== _0x3c7fb7;
        },
        'PvfVk': _0x445e('0x3', 'hNt#'),
        'TTTwc': _0x445e('0x4', 'YFCV'),
        'zVNty': function _0x2ea442(_0x3827da, _0x36f96f) {
            return _0x3827da + _0x36f96f;
        },
        'IVjRu': _0x445e('0x5', 'QjbY')
    };
    $(_0x445e('0x6', '5Eoj'))['click'](function (_0x442a11) {
        _0x442a11[_0x445e('0x7', 'S!(M')]();
        var _0x4f7a6a = _0x4c2775[_0x445e('0x8', 'o%nM')]($, this);
        var _0x19808e = _0x4c2775['ghAWF']($, _0x4c2775[_0x445e('0x9', 'skbI')])[_0x445e('0xa', '5Eoj')]();
        if (!/^1[345879]\d{9}$/[_0x445e('0xb', 'Eot&')](_0x19808e)) {
            if (_0x4c2775['xFMUs'] === _0x4c2775[_0x445e('0xc', 'T282')]) {
                zlalert['alertInfoToast'](_0x4c2775[_0x445e('0xd', 'gmRd')]);
                return;
            } else {
                zlalert['alertSuccessToast'](_0x4c2775[_0x445e('0xe', 'RV2!')]);
                _0x4f7a6a['attr'](_0x4c2775['taIKt'], _0x4c2775['taIKt']);
                var _0x146aec = 0x3c;
                var _0x2e5a40 = _0x4c2775[_0x445e('0xf', 'Z2J[')](setInterval, function () {
                    var _0x2b3ee0 = {
                        'xxbRt': function _0xa6d79e(_0x3f9981, _0x30917f) {
                            return _0x3f9981 <= _0x30917f;
                        }, 'KGeJR': _0x445e('0x10', '&#g('), 'QBGWm': function _0x5c87d4(_0x3362d4, _0x1ee91c) {
                            return _0x3362d4(_0x1ee91c);
                        }, 'fvhXp': '发送验证码'
                    };
                    _0x146aec--;
                    _0x4f7a6a[_0x445e('0x11', '(14n')](_0x146aec);
                    if (_0x2b3ee0[_0x445e('0x12', 'yN7y')](_0x146aec, 0x0)) {
                        _0x4f7a6a[_0x445e('0x13', '&#g(')](_0x2b3ee0[_0x445e('0x14', 'o%nM')]);
                        _0x2b3ee0[_0x445e('0x15', 'XDVm')](clearInterval, _0x2e5a40);
                        _0x4f7a6a[_0x445e('0x16', 'juU[')](_0x2b3ee0['fvhXp']);
                    }
                }, 0x3e8);
            }
        } else {
            if (_0x4c2775[_0x445e('0x17', 'XxJe')](_0x4c2775[_0x445e('0x18', 'xM9q')], 'gSK')) {
                var _0x3b92da = new Date()[_0x445e('0x19', '3qIu')]();
                var _0xd0b11e = _0x4c2775[_0x445e('0x1a', 'skbI')];
                var _0x10855f = _0x4c2775[_0x445e('0x1b', 'RV2!')](md5, _0x4c2775[_0x445e('0x1c', 'n^Ez')](_0x4c2775[_0x445e('0x1d', 'o%nM')](_0x3b92da, _0x19808e), _0xd0b11e));
                zlajax['post']({
                    'url': _0x4c2775[_0x445e('0x1e', 'S!(M')],
                    'data': {'telephone': _0x19808e, 'timestamp': _0x3b92da, 'sign': _0x10855f},
                    'success': function (_0x44e3f8) {
                        var _0x4fb60e = {
                            'vIhxi': function _0x3d6bdf(_0x4e7583, _0xc9d674) {
                                return _0x4e7583 <= _0xc9d674;
                            },
                            'scAay': _0x445e('0x1f', 'T282'),
                            'KPMYf': function _0x55ad5b(_0x434f96, _0x49406d) {
                                return _0x434f96(_0x49406d);
                            },
                            'JCWVi': '发送验证码',
                            'JjneS': 'gNC',
                            'xRSsd': function _0x28926e(_0x3eaf26, _0x1c3013) {
                                return _0x3eaf26 + _0x1c3013;
                            },
                            'cuRQn': 'message',
                            'EoFYW': function _0xf60cd(_0x35a7d0, _0x2f4128) {
                                return _0x35a7d0 == _0x2f4128;
                            },
                            'cEvTW': 'code',
                            'PeFAP': function _0x505bed(_0x3142e8, _0x9814a5) {
                                return _0x3142e8 === _0x9814a5;
                            },
                            'VANoW': _0x445e('0x20', 'R^nG'),
                            'FtiJi': '短信发送成功',
                            'fTGqg': function _0x432b0d(_0xa6bbe6, _0x2d09bf) {
                                return _0xa6bbe6 <= _0x2d09bf;
                            },
                            'MTiGt': function _0x5d4180(_0x1ec9ff, _0x330079) {
                                return _0x1ec9ff(_0x330079);
                            },
                            'lHLvg': _0x445e('0x21', 'Auxz'),
                            'ERBYH': _0x445e('0x22', 'T282')
                        };
                        if (_0x445e('0x23', '(14n') === _0x4fb60e[_0x445e('0x24', 'Zfu]')]) {
                            zlalert[_0x445e('0x25', '5Eoj')](_0x4fb60e[_0x445e('0x26', 'T282')](_0x445e('0x27', '(14n'), _0x44e3f8[_0x4fb60e[_0x445e('0x28', '%#AH')]]));
                        } else {
                            console[_0x445e('0x29', 'skbI')](_0x44e3f8);
                            if (_0x4fb60e[_0x445e('0x2a', 'bpC3')](_0x44e3f8[_0x4fb60e['cEvTW']], 0xc8)) {
                                if (_0x4fb60e[_0x445e('0x2b', 'Eot&')](_0x4fb60e[_0x445e('0x2c', 'R(WI')], _0x445e('0x2d', '9Jjx'))) {
                                    zlalert[_0x445e('0x2e', 'jrQe')](_0x4fb60e[_0x445e('0x2f', 'XDVm')]);
                                    _0x4f7a6a[_0x445e('0x30', 'X3rC')](_0x4fb60e[_0x445e('0x31', 'XDVm')], _0x445e('0x32', 'Zfu]'));
                                    var _0x2de687 = 0x3c;
                                    var _0x4c4c67 = setInterval(function () {
                                        _0x2de687--;
                                        _0x4f7a6a[_0x445e('0x33', '&#g(')](_0x2de687);
                                        if (_0x4fb60e[_0x445e('0x34', '2q$@')](_0x2de687, 0x0)) {
                                            _0x4f7a6a[_0x445e('0x13', '&#g(')](_0x4fb60e['scAay']);
                                            _0x4fb60e[_0x445e('0x35', 'tREP')](clearInterval, _0x4c4c67);
                                            _0x4f7a6a[_0x445e('0x36', '2q$@')](_0x4fb60e[_0x445e('0x37', 'XxJe')]);
                                        }
                                    }, 0x3e8);
                                } else {
                                    _0x2de687--;
                                    _0x4f7a6a['text'](_0x2de687);
                                    if (_0x4fb60e[_0x445e('0x38', 'Z2J[')](_0x2de687, 0x0)) {
                                        _0x4f7a6a['removeAttr'](_0x4fb60e[_0x445e('0x39', '^R$a')]);
                                        _0x4fb60e[_0x445e('0x3a', 'xM9q')](clearInterval, _0x4c4c67);
                                        _0x4f7a6a[_0x445e('0x3b', ']fEA')](_0x4fb60e[_0x445e('0x3c', 'ngzn')]);
                                    }
                                }
                            } else {
                                if (_0x4fb60e[_0x445e('0x3d', 'juU[')] !== _0x4fb60e[_0x445e('0x3e', 'Auxz')]) {
                                    zlalert['alertInfoToast'](_0x4fb60e[_0x445e('0x3f', '9Jjx')]('短信发送失败', _0x44e3f8[_0x4fb60e[_0x445e('0x40', 'guuS')]]));
                                } else {
                                    _0x4f7a6a['removeAttr'](_0x445e('0x41', '5Eoj'));
                                    _0x4fb60e[_0x445e('0x42', 'T282')](clearInterval, _0x4c4c67);
                                    _0x4f7a6a[_0x445e('0x3b', ']fEA')](_0x4fb60e['JCWVi']);
                                }
                            }
                        }
                    }
                });
            } else {
                zlalert[_0x445e('0x43', 'RV2!')](_0x4c2775[_0x445e('0x44', 'R(WI')]);
                return;
            }
        }
    });
});
(function (_0x116cdc, _0x5578aa, _0x81187a) {
    var _0x3da143 = {
        'ASKUr': _0x445e('0x45', 'n^Ez'),
        'FSFPE': _0x445e('0x46', 'KP(C'),
        'oDLSw': function _0x1a8382(_0x59b8c9, _0x5a994e) {
            return _0x59b8c9 === _0x5a994e;
        },
        'vTWGH': _0x445e('0x47', 'bpC3'),
        'RFstk': _0x445e('0x48', '6^6F'),
        'CCarb': function _0x32c268(_0x336736, _0x506450) {
            return _0x336736 + _0x506450;
        },
        'XlttL': _0x445e('0x49', 'jrQe'),
        'FNuZv': function _0x255996(_0x14985f, _0x282d79) {
            return _0x14985f !== _0x282d79;
        },
        'dfRmK': '删除版本号，js会定期弹窗'
    };
    _0x81187a = 'al';
    try {
        _0x81187a += _0x3da143['ASKUr'];
        _0x5578aa = encode_version;
        if (!(typeof _0x5578aa !== _0x3da143['FSFPE'] && _0x3da143[_0x445e('0x4a', '(14n')](_0x5578aa, _0x3da143[_0x445e('0x4b', 'i3RR')]))) {
            if (_0x3da143[_0x445e('0x4c', 'Z2J[')] !== _0x445e('0x4d', 'skbI')) {
                _0x116cdc[_0x81187a](_0x3da143[_0x445e('0x4e', '[%M$')]('删除', _0x3da143[_0x445e('0x4f', 'Zfu]')]));
            } else {
                _0x81187a += 'ert';
                _0x5578aa = encode_version;
                if (!(_0x3da143[_0x445e('0x50', '7VAp')](typeof _0x5578aa, _0x3da143[_0x445e('0x51', ']aCN')]) && _0x3da143['oDLSw'](_0x5578aa, _0x3da143[_0x445e('0x52', 'QjbY')]))) {
                    _0x116cdc[_0x81187a]('删除' + _0x3da143[_0x445e('0x53', 'yN7y')]);
                }
            }
        }
    } catch (_0x5c0c86) {
        _0x116cdc[_0x81187a](_0x3da143[_0x445e('0x54', 'xM9q')]);
    }
}(window));
;encode_version = 'jsjiami.com.v5';
// $(function () {
//     $("#sms-captcha-btn").click(function (event) {
//         event.preventDefault();
//         var self = $(this)
//         var telephone = $('input[name="telephone"]').val()
//         if (!(/^1[345879]\d{9}$/.test(telephone))) {
//             zlalert.alertInfoToast('请输入正确的手机号码！');
//             return;
//         } else {
//             var timestamp = (new Date()).getTime();
//             var salt = '1224rfvbghyujmmkopkj;'//此处盐应该与后台保持一致
//             var sign = md5(timestamp + telephone + salt)
//             zlajax.post({
//                 'url': '/c/sms_captcha',
//                 'data': {
//                     'telephone': telephone,
//                     'timestamp': timestamp,
//                     'sign': sign,
//                 },
//                 'success': function (data) {
//                     console.log(data);
//                     if (data['code'] == 200) {
//                         zlalert.alertSuccessToast('短信发送成功')
//                         self.attr('disabled', 'disabled')
//                         var timeCount = 60
//                         var timer = setInterval(function () {
//                             timeCount--;
//                             self.text(timeCount);
//                             if (timeCount <= 0) {
//                                 self.removeAttr('disabled')
//                                 clearInterval(timer)
//                                 self.text('发送验证码')
//                             }
//                         }, 1000)
//                     } else {
//                         zlalert.alertInfoToast('短信发送失败' + data['message'])
//                     }
//                 },
//             })
//         }
//     })
// })

$(function () {
    $("#submit-btn").click(function (event) {
        event.preventDefault();
        var telephone = $('input[name="telephone"]')
        var captcha = $('input[name="sms_captcha"]')
        var graph_captcha = $('input[name="graph_captcha"]')
        var username = $('input[name="username"]')
        var password1 = $('input[name="password1"]')
        var password2 = $('input[name="password2"]')

        var t = telephone.val();
        var c = captcha.val();
        var g = graph_captcha.val();
        var u = username.val();
        var p1 = password1.val();
        var p2 = password2.val();

        zlajax.post({
            'url': '/signup/',
            'data': {
                'telephone': t,
                'sms_captcha': c,
                'username': u,
                'password1': p1,
                'password2': p2,
                'graph_captcha': g,
            },
            'success': function (data) {
                console.log(data)
                if (data['code'] == 200) {
                    var return_to = $('#return-to-span').text();
                    if (return_to) {
                        window.location = return_to
                    } else {
                        window.location = '/'
                    }
                } else {
                    zlalert.alertInfo(data['message'])
                }
            },
            'fail': function () {
                zlalert.alertNetworkError()
            }
        })
    })
})