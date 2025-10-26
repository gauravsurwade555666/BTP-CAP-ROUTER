const cds = require('@sap/cds');

class appsrv extends cds.ApplicationService {
    async init() {

        //On event handler listens for the "triggerReminderEmailJob" event
        // Health check action handler
        this.on('healthCheck', async (req) => {
            try {
                // Lazy require to avoid caching issues if version changes during dev
                const pkg = require('../package.json');
                const mem = process.memoryUsage();
                return {
                    status: 'OK',
                    version: pkg.version,
                    uptimeSec: Math.round(process.uptime()),
                    timestamp: new Date().toISOString(),
                    memoryRss: mem.rss,
                    node: process.version
                };
            } catch (e) {
                req.error(500, e.message || 'Health check failed');
            }
        });


    }
}
module.exports = { appsrv };