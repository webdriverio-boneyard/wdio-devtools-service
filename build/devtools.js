'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _findProcess = require('find-process');

var _findProcess2 = _interopRequireDefault(_findProcess);

var _chromeRemoteInterface = require('chrome-remote-interface');

var _chromeRemoteInterface2 = _interopRequireDefault(_chromeRemoteInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevToolsService = function () {
    function DevToolsService() {
        (0, _classCallCheck3.default)(this, DevToolsService);
    }

    (0, _createClass3.default)(DevToolsService, [{
        key: 'beforeSession',
        value: function beforeSession(_, caps) {
            if (caps.browserName !== 'chrome' || caps.version && caps.version < 63) {
                console.error('The wdio-devtools-service currently only supports Chrome');
            }
        }
    }, {
        key: 'before',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var Network;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._findChromePort();

                            case 2:
                                this.chromePort = _context.sent;
                                _context.next = 5;
                                return this._getCDPClient(this.chromePort);

                            case 5:
                                this.client = _context.sent;
                                Network = this.client.Network;

                                this.client.Network.enable();

                                Network.requestWillBeSent(function (params) {
                                    return browser.logger.log(`Loading ${params.request.url}`);
                                });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function before() {
                return _ref.apply(this, arguments);
            }

            return before;
        }()
    }, {
        key: '_findChromePort',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var ps;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _findProcess2.default)('name', 'remote-debugging-port');

                            case 2:
                                ps = _context2.sent;


                                if (ps.length === 0) {
                                    console.error(`Couldn't find Chrome process`);
                                }

                                if (ps.length > 1) {
                                    console.error('More than one Chrome process is running');
                                }

                                return _context2.abrupt('return', parseInt(ps[0].cmd.match(/remote-debugging-port=(\d+)/)[1], 10));

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function _findChromePort() {
                return _ref2.apply(this, arguments);
            }

            return _findChromePort;
        }()
    }, {
        key: '_getCDPClient',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(port) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt('return', new _promise2.default(function (resolve) {
                                    return (0, _chromeRemoteInterface2.default)({
                                        port,
                                        host: 'localhost',
                                        target: function target(targets) {
                                            return targets.findIndex(function (t) {
                                                return t.type === 'page';
                                            });
                                        }
                                    }, resolve);
                                }));

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function _getCDPClient(_x) {
                return _ref3.apply(this, arguments);
            }

            return _getCDPClient;
        }()
    }]);
    return DevToolsService;
}();

exports.default = DevToolsService;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kZXZ0b29scy5qcyJdLCJuYW1lcyI6WyJEZXZUb29sc1NlcnZpY2UiLCJfIiwiY2FwcyIsImJyb3dzZXJOYW1lIiwidmVyc2lvbiIsImNvbnNvbGUiLCJlcnJvciIsIl9maW5kQ2hyb21lUG9ydCIsImNocm9tZVBvcnQiLCJfZ2V0Q0RQQ2xpZW50IiwiY2xpZW50IiwiTmV0d29yayIsImVuYWJsZSIsInJlcXVlc3RXaWxsQmVTZW50IiwicGFyYW1zIiwiYnJvd3NlciIsImxvZ2dlciIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJwcyIsImxlbmd0aCIsInBhcnNlSW50IiwiY21kIiwibWF0Y2giLCJwb3J0IiwicmVzb2x2ZSIsImhvc3QiLCJ0YXJnZXQiLCJ0YXJnZXRzIiwiZmluZEluZGV4IiwidCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxlOzs7Ozs7O3NDQUNGQyxDLEVBQUdDLEksRUFBTTtBQUNwQixnQkFBSUEsS0FBS0MsV0FBTCxLQUFxQixRQUFyQixJQUFrQ0QsS0FBS0UsT0FBTCxJQUFnQkYsS0FBS0UsT0FBTCxHQUFlLEVBQXJFLEVBQTBFO0FBQ3RFQyx3QkFBUUMsS0FBUixDQUFjLDBEQUFkO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7dUNBRzJCLEtBQUtDLGVBQUwsRTs7O0FBQXhCLHFDQUFLQyxVOzt1Q0FDZSxLQUFLQyxhQUFMLENBQW1CLEtBQUtELFVBQXhCLEM7OztBQUFwQixxQ0FBS0UsTTtBQUVHQyx1QyxHQUFZLEtBQUtELE0sQ0FBakJDLE87O0FBQ1IscUNBQUtELE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsTUFBcEI7O0FBRUFELHdDQUFRRSxpQkFBUixDQUEwQixVQUFDQyxNQUFEO0FBQUEsMkNBQVlDLFFBQVFDLE1BQVIsQ0FBZUMsR0FBZixDQUFvQixXQUFVSCxPQUFPSSxPQUFQLENBQWVDLEdBQUksRUFBakQsQ0FBWjtBQUFBLGlDQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBSWlCLDJCQUFZLE1BQVosRUFBb0IsdUJBQXBCLEM7OztBQUFYQyxrQzs7O0FBRU4sb0NBQUlBLEdBQUdDLE1BQUgsS0FBYyxDQUFsQixFQUFxQjtBQUNqQmhCLDRDQUFRQyxLQUFSLENBQWUsOEJBQWY7QUFDSDs7QUFFRCxvQ0FBSWMsR0FBR0MsTUFBSCxHQUFZLENBQWhCLEVBQW1CO0FBQ2ZoQiw0Q0FBUUMsS0FBUixDQUFjLHlDQUFkO0FBQ0g7O2tFQUVNZ0IsU0FBU0YsR0FBRyxDQUFILEVBQU1HLEdBQU4sQ0FBVUMsS0FBVixDQUFnQiw2QkFBaEIsRUFBK0MsQ0FBL0MsQ0FBVCxFQUE0RCxFQUE1RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21IQUdVQyxJOzs7OztrRUFDVixzQkFBWSxVQUFDQyxPQUFEO0FBQUEsMkNBQWEscUNBQUk7QUFDaENELDRDQURnQztBQUVoQ0UsOENBQU0sV0FGMEI7QUFHaENDLGdEQUFRLGdCQUFDQyxPQUFEO0FBQUEsbURBQWFBLFFBQVFDLFNBQVIsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLHVEQUFPQSxFQUFFQyxJQUFGLEtBQVcsTUFBbEI7QUFBQSw2Q0FBbEIsQ0FBYjtBQUFBO0FBSHdCLHFDQUFKLEVBSTdCTixPQUo2QixDQUFiO0FBQUEsaUNBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBaENNMUIsZSIsImZpbGUiOiJkZXZ0b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kUHJvY2VzcyBmcm9tICdmaW5kLXByb2Nlc3MnXG5pbXBvcnQgQ0RQIGZyb20gJ2Nocm9tZS1yZW1vdGUtaW50ZXJmYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZUb29sc1NlcnZpY2Uge1xuICAgIGJlZm9yZVNlc3Npb24gKF8sIGNhcHMpIHtcbiAgICAgICAgaWYgKGNhcHMuYnJvd3Nlck5hbWUgIT09ICdjaHJvbWUnIHx8IChjYXBzLnZlcnNpb24gJiYgY2Fwcy52ZXJzaW9uIDwgNjMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgd2Rpby1kZXZ0b29scy1zZXJ2aWNlIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIENocm9tZScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBiZWZvcmUgKCkge1xuICAgICAgICB0aGlzLmNocm9tZVBvcnQgPSBhd2FpdCB0aGlzLl9maW5kQ2hyb21lUG9ydCgpXG4gICAgICAgIHRoaXMuY2xpZW50ID0gYXdhaXQgdGhpcy5fZ2V0Q0RQQ2xpZW50KHRoaXMuY2hyb21lUG9ydClcblxuICAgICAgICBjb25zdCB7IE5ldHdvcmsgfSA9IHRoaXMuY2xpZW50XG4gICAgICAgIHRoaXMuY2xpZW50Lk5ldHdvcmsuZW5hYmxlKClcblxuICAgICAgICBOZXR3b3JrLnJlcXVlc3RXaWxsQmVTZW50KChwYXJhbXMpID0+IGJyb3dzZXIubG9nZ2VyLmxvZyhgTG9hZGluZyAke3BhcmFtcy5yZXF1ZXN0LnVybH1gKSlcbiAgICB9XG5cbiAgICBhc3luYyBfZmluZENocm9tZVBvcnQgKCkge1xuICAgICAgICBjb25zdCBwcyA9IGF3YWl0IGZpbmRQcm9jZXNzKCduYW1lJywgJ3JlbW90ZS1kZWJ1Z2dpbmctcG9ydCcpXG5cbiAgICAgICAgaWYgKHBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ291bGRuJ3QgZmluZCBDaHJvbWUgcHJvY2Vzc2ApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTW9yZSB0aGFuIG9uZSBDaHJvbWUgcHJvY2VzcyBpcyBydW5uaW5nJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZUludChwc1swXS5jbWQubWF0Y2goL3JlbW90ZS1kZWJ1Z2dpbmctcG9ydD0oXFxkKykvKVsxXSwgMTApXG4gICAgfVxuXG4gICAgYXN5bmMgX2dldENEUENsaWVudCAocG9ydCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IENEUCh7XG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICh0YXJnZXRzKSA9PiB0YXJnZXRzLmZpbmRJbmRleCgodCkgPT4gdC50eXBlID09PSAncGFnZScpXG4gICAgICAgIH0sIHJlc29sdmUpKVxuICAgIH1cbn1cbiJdfQ==