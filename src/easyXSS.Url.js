/** 
 * Contains methods for dealing with url's
 * @class
 */
easyXSS.Url = {
    /**
     * A hashtable that gives access to the documents query string
     * The hashtable is cached internally
     * @returns A hashtable populated with keys and values from the querystring
     * @type {Object}
     */
    Query: function(){
        if (this._query) {
            return this._query;
        }
        this._query = {};
        var pair, key, value, search = location.search.substring(1).split("&");
        for (var i = 0, len = search.length; i < len; i++) {
            pair = search[i];
            key = pair.substring(0, pair.indexOf("="));
            value = pair.substring(key.length + 1);
            this._query[key] = value;
        }
        return this._query;
    },
    /**
     * Get the domain name from a url
     * @param {String} url The url to extract the domain from
     * @returns The domain part of the url
     * @type {String}
     */
    getDomainName: function(url){
        var domain = url.substring(url.indexOf("//") + 2);
        domain = domain.substring(0, domain.indexOf("/"));
        var _indexOf = domain.indexOf(":");
        if (_indexOf != -1) {
            domain = domain.substring(0, _indexOf);
        }
        return domain;
    },
    /**
     * Returns  a string containing the schema, domain and if present the port
     * @param {String} url The url to extract the location from
     * @returns The location part of the url
     * @type {String}
     */
    getLocation: function(url){
        var indexOf = url.indexOf("//");
        var loc = url.substring(indexOf + 2);
        loc = loc.substring(0, loc.indexOf("/"));
        return url.substring(0, indexOf + 2) + loc;
    }
};
