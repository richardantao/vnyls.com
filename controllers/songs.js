const Dropbox = require("../config/dropbox");

module.exports = (req, res) => {
    Dropbox.filesListFolder({ path: "" })
    .then(songs => {
        if(!songs) return res.status(404).json({ message: "Songs not found" });

        return res.status(200).json(songs);
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};