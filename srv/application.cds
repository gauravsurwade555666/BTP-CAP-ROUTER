@requires: 'authenticated-user'
service appsrv {
    @restrict: [{to: ['testscope']}]
    function healthCheck() returns {
        status    : String; // Overall health indicator
        version   : String; // App/package version
        uptimeSec : Integer; // Process uptime in seconds
        timestamp : Timestamp; // Current server time
        memoryRss : Integer; // Resident set size (bytes)
        node      : String; // Node.js runtime version
    };

}
