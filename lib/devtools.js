import findProcess from 'find-process'
import CDP from 'chrome-remote-interface'

export default class DevToolsService {
    beforeSession (_, caps) {
        if (caps.browserName !== 'chrome' || (caps.version && caps.version < 63)) {
            console.error('The wdio-devtools-service currently only supports Chrome version 63 and up')
        }
    }

    async before () {
        this.chromePort = await this._findChromePort()
        this.client = await this._getCDPClient(this.chromePort)

        const { Network } = this.client
        this.client.Network.enable()

        Network.requestWillBeSent((params) => browser.logger.log(`Loading ${params.request.url}`))
    }

    async _findChromePort () {
        const ps = await findProcess('name', 'remote-debugging-port')

        if (ps.length === 0) {
            console.error(`Couldn't find Chrome process`)
        }

        if (ps.length > 1) {
            console.error('More than one Chrome process is running')
        }

        return parseInt(ps[0].cmd.match(/remote-debugging-port=(\d+)/)[1], 10)
    }

    async _getCDPClient (port) {
        return new Promise((resolve) => CDP({
            port,
            host: 'localhost',
            target: (targets) => targets.findIndex((t) => t.type === 'page')
        }, resolve))
    }
}
