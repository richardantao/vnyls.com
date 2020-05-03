const Dropbox = require("../config/dropbox");
const async = require("async");

module.exports = (req, res) => {
    const fetchPaths = callback => {
        Dropbox.filesListFolder({ path: "" })
        .then(folder => {
            return callback(null, folder.entries);
        })
        .catch(err => {
            return res.status(500).json(err.message);
        });
    };

    const getLinks = (entries, callback) => {
        let links = [];

        for(let i = 0; i < entries.length; i++) {
            const downloadFile = async path => {
                await Dropbox.filesGetTemporaryLink({ path })
                .then(file => {
                    return appendLinksList(file.link);
                })
                .catch(err => {
                    return res.status(500).json(err.message);
                });
            };

            downloadFile(entries[i].path_display);

            const appendLinksList = link => {
                if(i !== entries.length - 1) return links = [...links, link];

                return setTimeout(() => {
                    links = [...links, link];

                    callback(null, links);
                }, 500);
            };
        };
    };

    async.waterfall([ fetchPaths, getLinks ], (err, results) => {
        if(err) return res.status(500).json({ message: err.message });

        return res.status(200).json(results);
    });
};